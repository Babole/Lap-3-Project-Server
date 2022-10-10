TRUNCATE users RESTART IDENTITY;

INSERT INTO users (name, password)
VALUES
('test_user1','test_pass1'),
('test_user2','test_pass2');
