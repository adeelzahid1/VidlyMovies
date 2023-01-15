namespace VidlyMovies.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class SeedUsers : DbMigration
    {
        public override void Up()
        {
            Sql(@"
            INSERT INTO [dbo].[AspNetUsers] ([Id], [Email], [EmailConfirmed], [PasswordHash], [SecurityStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEndDateUtc], [LockoutEnabled], [AccessFailedCount], [UserName]) VALUES (N'59a658c0-5455-4d8c-9939-f68aa92529dd', N'guest@vidly.com', 0, N'AB/KVAzzPEhXGq+lWeR1Sgxp/QqflisAQqwG0B9tajs3wT7kSxMjsmxtkEu7q2zoRQ==', N'34f99997-e113-4728-82de-8f8801d02810', NULL, 0, 0, NULL, 1, 0, N'guest@vidly.com')
INSERT INTO [dbo].[AspNetUsers] ([Id], [Email], [EmailConfirmed], [PasswordHash], [SecurityStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEndDateUtc], [LockoutEnabled], [AccessFailedCount], [UserName]) VALUES (N'9e203540-c065-4c3e-a8d8-55feddc802f2', N'admin@vidly.com', 0, N'AFIiNLd2nA9IrcWGDZrbkcYEuHVzq0qc/9YdfeJVkef4DhDLUEpdlow/v9dXNBmQ6w==', N'dd2db32d-b4ad-49d9-96ff-58150960dd11', NULL, 0, 0, NULL, 1, 0, N'admin@vidly.com')

INSERT INTO [dbo].[AspNetRoles] ([Id], [Name]) VALUES (N'd970075b-abd7-48f7-bcee-210a203ced0c', N'CanManageMovies')
INSERT INTO [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'9e203540-c065-4c3e-a8d8-55feddc802f2', N'd970075b-abd7-48f7-bcee-210a203ced0c')

             ");
        }
        
        public override void Down()
        {
        }
    }
}
