<template>
    <div class="w-full flex flex-col items-center">
        <div class="relative">
            <div
                class="
                    absolute
                    rounded-full
                    bg-[#ed6f2d]
                    w-16
                    h-16
                    flex
                    justify-center
                    items-center
                    -bottom-14
                    md:-bottom-6
                    -right-12
                    md:-right-24
                    rotate-[-30deg]
                "
            >
                <p class="text-white text-xl">{{ $t('version.tag') }}</p>
            </div>
            <p class="text-2xl mb-2">
                <slot
                    name="title"
                    mdc-unwrap="p"
                />
            </p>
        </div>
        <p
            class="
                bg-clip-text
                text-transparent
                bg-gradient-to-br
                to-et-blue-light
                from-et-blue-dark
                text-7xl
                mb-2"
            >
            1.19
        </p>
        <p class="text-xl text-center px-12">
            <slot
                name="subtitle"
                mdc-unwrap="p"
            />
        </p>
    </div>
</template>
