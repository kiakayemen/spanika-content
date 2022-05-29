import { TextField, Box, Button } from "@mui/material"

const contact = () => {
  return (
    <>
      <h2>در تماس باشید</h2>
      برای ماجراجویی در فرهنگ لاتین
      <ul>
        <li>
          <h3>آدرس دفتر تهران</h3>
          تهران، خیابان سهروردی شمالی، خیابان خرمشهر، خیابان گلشن، پلاک ۸، واحد ۲</li>
        <li>
          <h3>ایمیل</h3>
          Mail: <a href="mailto:info@spanika.uno">info@spanika.uno</a></li>
        <li>
          <h3>تماس</h3>
          ثابت: <a href="tel:+982142071000">00982142071000</a></li>
        <li>
          <h3>پیام در واتساپ</h3>
          whatsapp: <a href="https://wa.me/34600664816">0034600664816</a></li>
      </ul>
        <h2>فرم تماس با اسپنیکا</h2>
      <br />
      <Box sx={{
        maxWidth: "60%",
        borderRadius: "5px"
      }}>
        <iframe width="100%" height="400" style={{ border: "0" }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d962.8290792003266!2d51.438915219752964!3d35.737085363296025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e0319e3e3b009%3A0xe39b94bfc1bb35d0!2z2YXZiNiz2LPZhyDZhdmH2KfYrNix2KrbjCDZvtin2LHYs9uM2KfZhtuM2qnYpw!5e0!3m2!1sen!2s!4v1645972751307!5m2!1sen!2s" allowFullScreen="allowfullscreen" loading="lazy"></iframe>
      </Box>
    </>
  )
}

export default contact