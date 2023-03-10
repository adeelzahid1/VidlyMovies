using System.Web;
using System.Web.Optimization;

namespace VidlyMovies
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/lib").Include(
                        "~/Scripts/jquery-{version}.js",
                        "~/Scripts/DataTables/jquery.dataTables.js",
                        "~/Scripts/bootstrap.js",
                        "~/Scripts/respond.js," ,
                        "~/Scripts/typeahead.bundle.min.js",
                        "~/Scripts/toastr.js"
            ));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/Modernizrr"));


            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/bootstrap-theme.css",
                      "~/Content/DataTables/css/jquery.dataTables.min.css",
                      "~/content/typeahead.css",
                      "~/content/toastr.css",
                      "~/Content/Site.css"));
        }
    }
}
