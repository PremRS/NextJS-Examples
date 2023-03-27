import Head from "next/head";
import ContactForm from "../../components/Contact/ContactForm";
import BlogLayout from "../../components/Layout/BlogLayout";

export default function ContactUsPage() {
  return (
    <BlogLayout>
      <Head>
        <title>Contact US</title>
      </Head>
      <h1>Blogs Posts - Contact US</h1>
      <ContactForm />
    </BlogLayout>
  );
}
