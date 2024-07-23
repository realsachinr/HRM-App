import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const PrivacyPolicy = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.sectionHeading}>Privacy Policy</Text>
        <Text style={styles.paragraph}>
          Welcome to [Your HRM App Name]! This privacy policy ("Policy")
          describes how [App Developer Name] ("App Developer", "we", "us" or
          "our") collects, protects, and uses the personally identifiable
          information ("Personal Information") you ("User", "you" or "your")
          may provide in the [Your HRM App Name] mobile application and any of
          its products or services (collectively, "Mobile Application" or
          "Services"). It also describes the choices available to you regarding
          our use of your Personal Information and how you can access and update
          this information. This Policy does not apply to the practices of
          companies that we do not own or control or to individuals that we do
          not employ or manage.
        </Text>

        <Text style={styles.sectionHeading}>1. Collection of Personal Information</Text>

        <Text style={styles.paragraph}>
          We receive and store any information you knowingly provide to us when
          you create an account, make a purchase, or fill any forms in the
          Mobile Application. When required, this information may include your
          email address, name, phone number, address, or other Personal
          Information. You can choose not to provide us with certain information,
          but then you may not be able to take advantage of some of the features
          of the Mobile Application.
        </Text>

        <Text style={styles.sectionHeading}>2. Use and Processing of Collected Information</Text>

        <Text style={styles.paragraph}>
          Any of the information we collect from you may be used to personalize
          your experience; improve our Mobile Application; improve customer
          service and respond to queries and emails of our customers; process
          transactions; send notification emails such as password reminders,
          updates, etc.; run and operate our Mobile Application and Services.
        </Text>

        <Text style={styles.paragraph}>
          We do not share Personal Information with third parties except as
          necessary to provide you with access to the Mobile Application and
          Services, comply with the law, or protect our rights. We may share
          your data with our partners and affiliates for internal business
          purposes but require them to comply with this Policy.
        </Text>

        <Text style={styles.sectionHeading}>3. Data Retention</Text>

        <Text style={styles.paragraph}>
          We will retain and use your Personal Information for as long as your
          account is active, or as needed to provide you with Services, comply
          with our legal obligations, resolve disputes, and enforce our
          agreements. We may retain use data for internal analysis purposes.
        </Text>

        <Text style={styles.sectionHeading}>4. Security of Your Information</Text>

        <Text style={styles.paragraph}>
          We secure information you provide on computer servers in a controlled,
          secure environment, protected from unauthorized access, use, or
          disclosure. We maintain reasonable administrative, technical, and
          physical safeguards in an effort to protect against unauthorized
          access, use, modification, and disclosure of Personal Information in
          its control and custody. However, no data transmission over the
          Internet or wireless network can be guaranteed.
        </Text>

        <Text style={styles.sectionHeading}>5. Changes and Amendments</Text>

        <Text style={styles.paragraph}>
          We reserve the right to modify this Policy or its terms relating to
          the Mobile Application and Services at any time, effective upon
          posting of an updated version of this Policy in the Mobile
          Application. When we do, we will revise the updated date at the bottom
          of this page. Continued use of the Mobile Application after any such
          changes shall constitute your consent to such changes.
        </Text>

        <Text style={styles.sectionHeading}>6. Acceptance of This Policy</Text>

        <Text style={styles.paragraph}>
          You acknowledge that you have read this Policy and agree to all its
          terms and conditions. By using the Mobile Application or its Services,
          you agree to be bound by this Policy. If you do not agree to abide by
          the terms of this Policy, you are not authorized to use or access the
          Mobile Application and its Services.
        </Text>

        <Text style={styles.paragraph}>
          If you have any questions about this Policy, please contact us at [Contact Information].
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  contentContainer: {
    paddingBottom: 16,
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 8,
  },
});

export default PrivacyPolicy;
