import React, { useEffect } from "react";

import { PageLayout } from "../PageLayout/PageLayout";
import { LandingSection } from "../../components/LandingSection/LandingSection";
import { Appointment } from "../../components/Appointment/Appointment";
import { ServiceForm } from "../../components/ServiceForm/ServiceForm";

export const LandingPage = () => {
  useEffect(() => {}, []);

  return (
    <PageLayout>
      <LandingSection />
      <Appointment />
      <ServiceForm />
    </PageLayout>
  );
};
