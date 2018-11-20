# DB

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- has_many :groups
- has_many :users



## usersテーブル

|Column|Type|Options|
|------|----|-------|
|member_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- has_many :groups
- has_many :members
- has_many :messages



## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|member_id|integer|null: false, foreign_key: true|

### Association
- has_many :groups
- has_many :users
- has_many :messages



## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|body|text|null: false|
|image|text|null: false|
|created|integer|null: false|

### Association
- belongs_to :group
- belongs_to :user
