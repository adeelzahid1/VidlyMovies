namespace VidlyMovies.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class MembershipType : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.MembershipTypes", "DurationInMonths", c => c.Byte(nullable: false));
            DropColumn("dbo.MembershipTypes", "DurationInMonth");
        }
        
        public override void Down()
        {
            AddColumn("dbo.MembershipTypes", "DurationInMonth", c => c.Byte(nullable: false));
            DropColumn("dbo.MembershipTypes", "DurationInMonths");
        }
    }
}
