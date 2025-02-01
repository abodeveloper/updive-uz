import Logo from "@/assets/images/contacts-icons/contact-logo.svg";
import Github from "@/assets/images/contacts-icons/github-fill.svg";
import Threads from "@/assets/images/contacts-icons/threads.svg";
import Twitter from "@/assets/images/contacts-icons/twitter-x-fill.svg";
import Youtube from "@/assets/images/contacts-icons/youtube-fill.svg";
import CustomButton from "@/components/CustomButton";
import SectionTitle from "@/components/SectionTitle";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { toast } from "react-toastify";
import * as yup from "yup";
import {
  IconsWrapper,
  LeftSide,
  RightSide,
  SectionWrapper,
  StyledForm,
} from "./ContactForm.styles";

const BOT_TOKEN = "7724945535:AAHHERjlJDJpqN9hD2yNYkhLjsLRKe3OJyk"; // Bot tokeningizni kiriting
const CHAT_ID = "-1002251533234"; // Foydalanuvchi yoki guruh chat ID'si

const sendTelegramMessage = async (message) => {
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
  try {
    await axios.post(url, {
      chat_id: CHAT_ID,
      text: message,
      parse_mode: "HTML",
    });
  } catch (error) {
    console.error("Telegram xabar yuborishda xatolik:", error);
  }
};

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  phone: yup
    .string()
    .required("Phone number is required")
    .test("is-valid", "Invalid phone number", (value) =>
      value ? /^\+\d{10,15}$/.test(value) : false
    ),
});

const sendMessage = async (data) => {
  await sendTelegramMessage(
    `📩 <b>New Contact Form Submission</b>\n\n👤 Name: ${data.name}\n📞 Phone: ${data.phone}\n📝 Message: ${data.message}`
  );
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const mutation = useMutation({
    mutationFn: sendMessage,
    onSuccess: () => {
      toast.success("Message sent successfully!");
      reset();
    },
    onError: () => {
      toast.error("There was an error sending the message!");
    },
  });

  const onSubmit = (data) => {
    mutation.mutate({ ...data, phone: data.phone });
  };

  return (
    <SectionWrapper>
      <Container>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <LeftSide>
            <img src={Logo} width={64} alt="Logo" />
            <SectionTitle
              justify="start"
              title="Get in Touch with Us"
              description="Have questions or need assistance? Our team is here to help you secure and optimize your business anytime."
            />
            <IconsWrapper>
              <a href="#">
                <img src={Twitter} alt="Twitter" />
              </a>
              <a href="#">
                <img src={Github} alt="GitHub" />
              </a>
              <a href="#">
                <img src={Youtube} alt="YouTube" />
              </a>
              <a href="#">
                <img src={Threads} alt="Threads" />
              </a>
            </IconsWrapper>
          </LeftSide>
          <RightSide>
            <Form.Group controlId="name">
              <Form.Label>Your name</Form.Label>
              <Form.Control
                type="text"
                {...register("name")}
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="phone">
              <Form.Label>Your phone number</Form.Label>
              <PhoneInput
                international
                defaultCountry="UZ"
                value={watch("phone")}
                onChange={(value) => setValue("phone", value)}
                className={`form-control ${errors.phone ? "is-invalid" : ""}`}
              />
              {errors.phone && (
                <div className="invalid-feedback">{errors.phone.message}</div>
              )}
            </Form.Group>

            <Form.Group controlId="message">
              <Form.Label>Your message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Enter your message"
                {...register("message")}
                isInvalid={!!errors.message}
              />
              <Form.Control.Feedback type="invalid">
                {errors.message?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <CustomButton
              type="primary"
              disabled={isSubmitting || mutation.isPending}
              title={mutation.isPending ? "Sending..." : "Submit"}
            ></CustomButton>
          </RightSide>
        </StyledForm>
      </Container>
    </SectionWrapper>
  );
};

export default ContactForm;
