<template>
    <v-dialog
      :model-value="true"
      width="900"
    >
      <v-card>
          <v-card-text class="position-relative">
              <div class="text-h6 font-weight-bold"><slot name="title" /></div>
              <div class="text-grey"><slot name="subtitle" /></div>
              <v-btn variant="plain" class="close-btn" size="medium" width="2rem" height="2rem" icon="mdi-close" @click="$router.back()"></v-btn>
        </v-card-text>

        <v-card-text style="max-height: 40rem; overflow: auto">
            <slot></slot>
        </v-card-text>
        
        <v-card-actions class="py-3 px-6 justify-end">
          <v-btn color="grey" @click="$router.back()">Cancel</v-btn>
          <v-btn variant="tonal" color="primary" @click="$emit('save')">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>
<style scoped>
.close-btn
{
    position: absolute;
    top: .5rem;
    right: 1.5rem;
    width: 1rem;
}
</style>