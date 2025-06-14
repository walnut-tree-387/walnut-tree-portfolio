<template>
    <div class="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
        <div class="flex justify-between items-center px-6 py-4 mb-8">
            <WalnutLogo />
            <div class="gap-6 flex"></div>
            <ColorModeSwitch />
        </div>
        <slot />
    </div>
</template>