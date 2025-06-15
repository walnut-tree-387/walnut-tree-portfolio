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
        <Input type="text" placeholder="Enter your name" v-bind="componentField" class="w-full" />
      </FormControl>
      <FormMessage />
    </FormItem>
  </FormField>
  <div class="flex justify-center">
    <Button type="submit">Submit</Button>
  </div>
</form>

</template>

