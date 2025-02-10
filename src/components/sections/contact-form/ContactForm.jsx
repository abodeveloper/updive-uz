import CopyCheck from "@/assets/images/contacts-icons/checkbox-multiple-copy.svg";
import Logo from "@/assets/images/contacts-icons/contact-logo.svg";
import Copy from "@/assets/images/contacts-icons/file-copy.svg";
import InstagramContact from "@/assets/images/contacts-icons/instagram-fill-color.svg";
import Email from "@/assets/images/contacts-icons/mail.svg";
import Telephone from "@/assets/images/contacts-icons/phone.svg";
import TelegramContact from "@/assets/images/contacts-icons/telegram-fill-color.svg";
import Telegram from "@/assets/images/contacts-icons/telegram.svg";
import Threads from "@/assets/images/contacts-icons/threads.svg";
import TwitterContact from "@/assets/images/contacts-icons/twitter-x-fill.svg";
import WhatsapContact from "@/assets/images/contacts-icons/whatsapp-fill-color.svg";
import Youtube from "@/assets/images/contacts-icons/youtube-fill.svg";
import CustomButton from "@/components/CustomButton";
import SectionTitle from "@/components/SectionTitle";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Fade } from "react-reveal";
import { toast } from "react-toastify";
import * as yup from "yup";
import {
  BottomCards,
  Card,
  IconsWrapper,
  LeftSide,
  RightSide,
  SectionWrapper,
  StyledForm,
  Wrapper,
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

  const [copied, setCopied] = useState(null); // Qaysi kartada nusxalash amalga oshirilganini bilish uchun

  const copyToClipboard = (link, index) => {
    navigator.clipboard
      .writeText(link)
      .then(() => {
        setCopied(index); // Nusxalanish amalga oshgan kartani saqlaymiz
      })
      .catch(() => console.log("Xatolik yuz berdi! ❌"));

    setTimeout(() => setCopied(null), 2000); // 2 soniya o'zgargan holatni tozalash
  };

  return (
    <SectionWrapper>
      <Container>
        <Wrapper>
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
                  <img src={TelegramContact} alt="GitHub" />
                </a>
                <a href="#">
                  <img src={InstagramContact} alt="GitHub" />
                </a>
                <a href="#">
                  <img src={WhatsapContact} alt="Twitter" />
                </a>
                <a href="#">
                  <img src={Youtube} alt="YouTube" />
                </a>
                <a href="#">
                  <img src={TwitterContact} alt="Twitter" />
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
          <BottomCards>
            <Fade bottom duration={700} delay={500}>
              <Card>
                <div className="left">
                  <div className="left-top">
                    <img src={Telephone} alt="" />
                    <div className="title">Phone</div>
                  </div>
                  <div className="link">+998 97 734 28 04</div>
                </div>
                <div className="right">
                  {copied === 0 ? (
                    <img src={CopyCheck} alt="Copy" />
                  ) : (
                    <img
                      src={Copy} // Agar nusxalash bo'lsa, rasmni o'zgartiramiz
                      alt="Copy"
                      onClick={() => copyToClipboard("+998977342804", 0)} // Telefon raqamini nusxalash
                    />
                  )}
                </div>
              </Card>
            </Fade>

            <Fade bottom duration={700} delay={500}>
              <Card>
                <div className="left">
                  <div className="left-top">
                    <img src={Email} alt="" />
                    <div className="title">Email</div>
                  </div>
                  <div className="link">UpdiveOfficial@mail.com</div>
                </div>
                <div className="right">
                  {copied === 1 ? (
                    <img src={CopyCheck} alt="Copy" />
                  ) : (
                    <img
                      src={Copy} // Agar nusxalash bo'lsa, rasmni o'zgartiramiz
                      alt="Copy"
                      onClick={() =>
                        copyToClipboard("UpdiveOfficial@mail.com", 1)
                      } // Email manzilini nusxalash
                    />
                  )}
                </div>
              </Card>
            </Fade>

            <Fade bottom duration={700} delay={500}>
              <Card>
                <div className="left">
                  <div className="left-top">
                    <img src={Telegram} alt="" />
                    <div className="title">Telegram</div>
                  </div>
                  <div className="link">@Updive_Official</div>
                </div>
                <div className="right">
                  {copied === 2 ? (
                    <img src={CopyCheck} alt="Copy" />
                  ) : (
                    <img
                      src={Copy} // Agar nusxalash bo'lsa, rasmni o'zgartiramiz
                      alt="Copy"
                      onClick={() => copyToClipboard("@Updive_Official", 2)} // Telegram linkini nusxalash
                    />
                  )}
                </div>
              </Card>
            </Fade>
          </BottomCards>
        </Wrapper>
      </Container>
    </SectionWrapper>
  );
};

export default ContactForm;
