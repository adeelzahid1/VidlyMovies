namespace VidlyMovies.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class PopulateMembershipTypeName : DbMigration
    {
        public override void Up()
        {
            Sql("UPDATE MembershipTypes  SET MembershipTypeName = 'Pay as You Go' WHERE Id = 1");
        }
        
        public override void Down()
        {
        }
    }
}
