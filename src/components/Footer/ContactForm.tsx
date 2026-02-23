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
          sx={{
            fontFamily: "var(--font-playfair)",
            color: "#FAF8F5",
            fontSize: 22,
            fontWeight: 600,
            marginTop: { xs: 4, md: 0 },
            mb: 1,
          }}
        >
          Send us a message
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "rgba(250, 248, 245, 0.5)",
            mb: 3,
          }}
        >
          We&apos;ll get back to you within 24 hours
        </Typography>
        <Box sx={{ mt: "auto", display: "flex", flexDirection: "column", gap: 0.5 }}>
          <TextInputField
            value={name}
            placeholder="Name"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setName(event.target.value);
              setNameErr(false);
            }}
            error={nameErr}
          />
          <TextInputField
            placeholder="Company"
            value={company}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setCompany(event.target.value);
              setCompanyErr(false);
            }}
            error={companyErr}
          />
          <TextInputField
            placeholder="Subject"
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
            placeholder="Message"
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
          marginTop: 2,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box sx={{ width: { xs: "80%", md: "50%" } }}>
          <FilledButton text="Send Message" isLoading={loading} method={handleClick} />
        </Box>
      </Box>
    </Box>
  );
}

export default ContactForm;
