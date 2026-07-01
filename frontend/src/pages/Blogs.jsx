import BlogFooter from "../components/blogs/BlogFooter";
import BlogGrid from "../components/blogs/BlogGrid";
import CategoryShowcase from "../components/blogs/Categories";
import BlogHero from "../components/blogs/Home";

function Blogs() {
  return (
    <>
    <section id="blog">
        <BlogHero />
        <BlogGrid />
        <CategoryShowcase />
        <BlogFooter />
    </section>
    </>
  );
}

export default Blogs;
