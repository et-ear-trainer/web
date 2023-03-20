<template>
  <div class="quotes-wrapper">
    <transition
      name="fade"
      mode="out-in"
    >
      <div
        :key="quoteIndex"
        class="quote"
      >
        <p class="quote-text">
          “{{ currentQuote.quote }}“
        </p>
        <p class="person-text">
          - {{ currentQuote.person }}
        </p>
      </div>
    </transition>
  </div>
</template>
<script lang="ts" setup>
  const quotes = [
    {
      quote: 'I’m studying jazz, and this is the perfect app to improve my skills.',
      person: 'App Store Review'
    },
    {
      quote: 'Die Voicings haben mich überzeugt! Endlich mal ein Gehörbildungssoftware, wo die Voicings so sind, wie sie in der Praxis auch meist gespielt werden.',
      person: 'Thomas Silvestri, Pianist / Komponist'
    },
    {
      quote: 'Ganz grosses Kino! Mit einem herzlichen «Vielen Dank» und «weiter so»',
      person: 'Prof. Heiko Freund, Leiter Schwerpunkt Pop, ZHdK'
    },
    {
      quote: 'Looking forward to training my ears with this innovative app!',
      person: 'Tim Hagans, U.S. trumpeter, arranger, composer'
    },
    {
      quote: 'Ich freue mich, dass ihr euch so engagiert für dieses Gebiet, welches zuoberst auf der Prioritätenliste einer jeden Jazzstudentin und eines jeden Jazzstudenten sein sollte.',
      person: 'Eugen Irniger, ehemaliger Dozent Gehörbildung an der Swiss Jazz School in Bern',
    },
    {
      quote: 'Die Ear Trainings App ist super!',
      person: 'Dieter Studer, Musiker/Trompeter'
    },
    {
      quote: 'Bin gespannt! Das werde ich bestimmt ausprobieren.',
      person: 'Elena Gonzalez, Oboistin',   
    },
    {
      quote: 'Das Grundkonzept, dass man die Antworten über das Mikrophon eingibt, finde ich super, weil es nahe an der Praxis ist.',
      person: 'Philippe Kocher, Zürcher Hochschule der Künste ZHdK, Institute for Computer Music and Sound Technology'
    },
    {
      quote: 'Ich finde die App fantastisch. Audio Eingabe / Art der Aufgaben / Schwierigkeitsgrad / straightforward und minimalistisch in Layout und Aufgabenstellung  ... und macht auch Spass! Kanns kaum erwarten, bis wir sie einsetzen können dürfen sollen',
      person: 'Manuel Perovic, Dozent Musiktheorie und Hörtraining, Zürcher Hochschule der Künste ZHdK'
    },
    {
      quote: 'Congratulations on your accomplishment! It is not small. I’m sure the app will be of great benefit to many musicians.',
      person: 'Armen Donelian, U.S. author, pianist, composer, educator at the New School NY and William Patterson University NJ'
    },
    {
      quote: 'I love the voicings section—the best I’ve yet heard. Great work, thanks. I’ll recommend it.',
      person: 'John Funkhouser, Berklee Ear Training Department'
    },
    {
      quote: 'Die App hat mir geholfen, mich präzise auf die Gehörbildungsprüfungen vorzubereiten, und es werden genau die Fähigkeiten trainiert, welche im musikalischen Alltag nützlich sind.',
      person: 'Moritz Werner, ZHdK-Student Tonübertragung'
    }
  ];

  const quoteIndex = ref(0);

  const currentQuote = computed(() => quotes[quoteIndex.value]);

  const nextQuote = () => {
    quoteIndex.value++;
    if(quoteIndex.value === quotes.length) {
      quoteIndex.value = 0;
    }
  };

  useIntervalFn(() => nextQuote(), 4500);

</script>
<style lang="scss" scoped>
  .quotes-wrapper {
    @apply min-h-[300px] max-w-full flex items-center justify-center px-7;

    .quote {
      @apply max-w-full;
      .quote-text {
        @apply max-w-lg;
      }

      .person-text {
        @apply ml-20 mt-5;
      }
    }
  }
</style>