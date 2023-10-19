<template>
    <v-select :items="mosques" item-value="id" item-title="name" return-object :loading="pending"></v-select>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useMosqueStore } from './../../stores/mosque.ts'

const mosqueStore = useMosqueStore()

const { mosques } = storeToRefs(mosqueStore)

const { pending } = useLazyAsyncData( async () => await mosqueStore.list())
</script>