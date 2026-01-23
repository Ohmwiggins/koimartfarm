import { Box, Typography } from "@mui/material";
import { ContactUsLayout, TextInputField } from "./Footer.styles";
import FilledButton from "../FilledButton";
import { useState } from "react";

function ContactForm() {
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [topic, setTopic] = useState("");
  const [details, setDetails] = useState("");

  const [nameErr, setNameErr] = useState(false);
  const [companyErr, setCompanyErr] = useState(false);
  const [topicErr, setTopicErr] = useState(false);
  const [detailsErr, setDetailsErr] = useState(false);

  const handleClick = async () => {
    if (!isCompleteFeilds()) return;
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name,
          company: company,
          topic: topic,
          details: details,
        }),
      });

      const json = await res.json();
      console.log(json);
      if (!json.ok) throw new Error(json.error || "Failed");
      resetAllFields();
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const isCompleteFeilds = () => {
    setNameErr(!name);
    setCompanyErr(!company);
    setTopicErr(!topic);
    setDetailsErr(!details);

    if (nameErr || companyErr || topicErr || detailsErr) {
      return false;
    }
    return true;
  };

  const resetAllFields = () => {
    setName("");
    setCompany("");
    setTopic("");
    setDetails("");
  };

  return (
    <Box sx={{ height: "100%" }}>
      <ContactUsLayout>
        <Typography
          variant="h4"
          sx={{ color: "primary.contrastText", marginTop: { xs: 3, md: 0 } }}
        >
          ส่งข้อความหาเรา
        </Typography>
        <Box sx={{ mt: "auto" }}>
          <TextInputField
            value={name}
            placeholder="ชื่อผู้ติดต่อ"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setName(event.target.value);
              setNameErr(false);
            }}
            error={nameErr}
          />
          <TextInputField
            placeholder="บริษัท"
            value={company}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setCompany(event.target.value);
              setCompanyErr(false);
            }}
            error={companyErr}
          />
          <TextInputField
            placeholder="หัวเรื่อง"
            value={topic}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setTopic(event.target.value);
              setTopicErr(false);
            }}
            error={topicErr}
          />
          <TextInputField
            multiline
            rows={4}
            placeholder="รายละเอียด"
            value={details}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setDetails(event.target.value);
              setDetailsErr(false);
            }}
            error={detailsErr}
          />
        </Box>
      </ContactUsLayout>

      <Box
        sx={{
          marginTop: "10px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box sx={{ width: { xs: "80%", md: "40%" } }}>
          <FilledButton text="ส่ง" isLoading={loading} method={handleClick} />
        </Box>
      </Box>
    </Box>
  );
}

export default ContactForm;
