import { Grid } from '@mui/material';
import BlogPostCard from 'app/blog/components/BlogPostCard';
import BlogImage from 'statics/images/blog-icon.webp';
import { Banner } from '../components/Banner';

export default function Blog() {
  return (
    <section className="max-w-[1184px] w-full">
      <Banner
        image={BlogImage}
        title="Blog Posts"
        subTitle="Read about news, announcements and more!"
      />

      <Grid container spacing={2} className="mt-4">
        <Grid item xs={6}>
          <BlogPostCard />
        </Grid>

        <Grid item xs={6}>
          <BlogPostCard />
        </Grid>

        <Grid item xs={6}>
          <BlogPostCard />
        </Grid>
      </Grid>
    </section>
  );
}
