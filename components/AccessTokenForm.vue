<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { toast } from 'vue-sonner'
import {
  FormControl,
  FormField,
  FormItem,
} from '@/components/ui/form'
const formSchema = toTypedSchema(
  z.object({
    name: z.string().min(1, 'Name is required'),
  })
)
const { handleSubmit } = useForm({
  validationSchema: formSchema,
})
const formattedDate = new Date().toLocaleString('en-US', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: '2-digit',
  hour: 'numeric',
  minute: 'numeric',
  hour12: true,
});
const router = useRouter();
const onSubmit = handleSubmit((values) => {
  console.log('Form submitted:', values);
    router.push('/dashboard').then(() => {
        toast(`${values.name} Registered Successfully`, {
            description: formattedDate,
        });
    });
})


</script>

<template>
<form class="w-full max-w-sm space-y-4" @submit.prevent="onSubmit">
  <FormField v-slot="{ componentField }" name="name">
    <FormItem>
      <FormControl>
        <div class="relative w-full">
          <Input
            type="text"
            placeholder="What may I call you?"
            v-bind="componentField"
            class="w-full pr-12"
          />
          <IconButton 
            :name="'material-symbols:arrow-forward-ios'" 
            :size="'sm'"
            class="absolute top-1/2 right-2 -translate-y-1/2"
          />
        </div>
      </FormControl>
    </FormItem>
  </FormField>
</form>



</template>

