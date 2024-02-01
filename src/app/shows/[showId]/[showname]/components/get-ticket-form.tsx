"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  show: z.string(),
  name: z.string(),
  email: z.string(),
  price: z.string(),
});

interface GetTicketFormProps {
  show: string;
}

const GetTicketForm: React.FC<GetTicketFormProps> = ({ show }) => {
  const [open, setOpen] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      show: show || "",
      name: "",
      email: "",
      price: "$25",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    if (typeof window !== undefined) {
      localStorage.setItem("booking", JSON.stringify([values]));
    }
    setOpen(false);
  };
  return (
    <Dialog open={open}>
      <DialogTrigger>
        <Button size="sm" onClick={() => setOpen(true)}>
          Get Ticket
        </Button>
      </DialogTrigger>
      <DialogContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="show"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Show</FormLabel>
                  <Input disabled {...field} />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <Input placeholder="Your name" {...field} />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <Input type="email" placeholder="Your email" {...field} />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <Input disabled {...field} />
                </FormItem>
              )}
            />
            <div className="flex justify-end">
              <Button type="submit">Book Now</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default GetTicketForm;
