# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  has_secure_password validations: false
  before_validation :ensure_session_token
  has_many :playlists,
    primary_key: :id,
    foreign_key: :creator_id,
    class_name: 'Playlist'

  validates :email, 
    uniqueness: true, 
    presence: true,
    length: { in: 3..255},
    format: { with: URI::MailTo::EMAIL_REGEXP }

  validates :password, length: { in: 6..50}, allow_nil: true

  validates :username,
    uniqueness: true, 
    presence: true,
    length: { in: 3..30},
    format: { without: URI::MailTo::EMAIL_REGEXP, message:  "can't be an email" }
  
  # validates :birth_date, presence: true
  # validates :gender, presence: true
  validates :session_token, uniqueness: true, presence: true
  
  has_one_attached :photo

  def self.find_by_credentials(credential, password)
    if URI::MailTo::EMAIL_REGEXP.match(credential)
      user = User.find_by(email: credential)
    else
      user = User.find_by(username: credential)
    end

    if user
      return user if user.authenticate(password)
    else
      return nil
    end
  end

  def reset_session_token!
    self.session_token = generate_unique_session_token
    self.save!
    self.session_token
  end
  
  private

  def generate_unique_session_token
    token = SecureRandom.urlsafe_base64
    while User.exists?(session_token: token)
      token = SecureRandom.urlsafe_base64
    end
    return token
  end

  def ensure_session_token
    self.session_token ||= generate_unique_session_token
  end
  
  

end
