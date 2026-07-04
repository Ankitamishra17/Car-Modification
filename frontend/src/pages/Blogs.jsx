import BlogFooter from "../components/blogs/BlogFooter";
import BlogGrid from "../components/blogs/BlogGrid";
import BlogHero from "../components/blogs/Home";

function Blogs() {
  return (
    <>
    <section id="blog">
        <BlogHero />
        <BlogGrid />
        <BlogFooter />
    </section>
    </>
  );
}

export default Blogs;
