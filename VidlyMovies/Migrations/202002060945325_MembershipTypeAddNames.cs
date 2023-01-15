namespace VidlyMovies.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class MembershipTypeAddNames : DbMigration
    {
        public override void Up()
        {
            Sql("UPDATE MembershipTypes  SET MembershipTypeName = 'Monthly' WHERE Id = 2");
            Sql("UPDATE MembershipTypes  SET MembershipTypeName = 'Quarterly' WHERE Id = 3");
            Sql("UPDATE MembershipTypes  SET MembershipTypeName = 'Yearly' WHERE Id = 4");
        }
        
        public override void Down()
        {
        }
    }
}
