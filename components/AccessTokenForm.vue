<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { toast } from 'vue-sonner'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
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
    router.push('/').then(() => {
        toast(`${values.name} Registered Successfully`, {
            description: formattedDate,
        });
    });
})


</script>

<template>
  <form class="w-full max-w-sm space-y-6" @submit.prevent="onSubmit">
    <FormField v-slot="{ componentField }" name="name">
      <FormItem>
        <FormLabel>What's your name?</FormLabel>
        <FormControl>
          <Input type="text" placeholder="Enter your name" v-bind="componentField" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <Button type="submit">Submit</Button>
  </form>
</template>

