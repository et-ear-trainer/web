<script lang="ts" setup>
const props = defineProps<{
  title: string,
  description: string
}>();

const route = useRoute();

useServerSeoMeta({
  title: props.title,
  ogTitle : props.title,
  twitterTitle: props.title,
  description: props.description,
  ogDescription: props.description,
  twitterDescription: props.description,
  twitterCard: 'summary_large_image',
  ogType: 'website',
  ogSiteName: 'ET - Ear Trainer',
  ogUrl: 'https://eliaschenker.com/ET_App',
  ogImage: 'https://eliaschenker.com/ET_App/og_image.png',
  ogImageAlt: 'ET - Ear Trainer'
});
</script>