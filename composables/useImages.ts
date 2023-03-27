export interface Image {
  fullPath: string,
  thumbnailPath: string,
  alt: string
}

export const useImages = () => {

  const { $i18n } = useNuxtApp();

  const amountImages = 8;
  const runtimeConfig = useRuntimeConfig();

  const basePath = `${runtimeConfig.public.baseURL}/img/app/`;

  const images = computed(() => {
    const result: Image[] = [];
    for (let i = 1;i<=amountImages;i++) {
      result.push({
        fullPath: `${basePath}full/${i}_${$i18n.locale.value}.png`,
        thumbnailPath: `${basePath}thumbnail/${i}_${$i18n.locale.value}_thumbnail.jpg`,
        alt: $i18n.t(`images.${i}_alt`),
      });
    }
    return result;
  });

  const currentImage = useState('currentImage', () => 0);
  const isImageOpen = useState('isImageOpen', () => false);

  const openImage = (index: number) => {
    currentImage.value = index;
    isImageOpen.value = true;
  };

  const closeImage = () => {
    isImageOpen.value = false;
  };

  return {
    images,
    currentImage,
    isImageOpen,
    openImage,
    closeImage
  };
};
