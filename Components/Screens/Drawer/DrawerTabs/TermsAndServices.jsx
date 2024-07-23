import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const TermsAndServices = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.sectionHeading}>
          Welcome to [Your HRM App Name]!
        </Text>
        <Text style={styles.paragraph}>
          These terms and services ("Terms", "Agreement") are an agreement
          between [App Developer Name] ("App Developer", "us", "we" or "our")
          and you ("User", "you" or "your"). This Agreement sets forth the
          general terms and conditions of your use of the [Your HRM App Name]
          mobile application and any of its products or services (collectively,
          "Mobile Application" or "Services").
        </Text>

        <Text style={styles.sectionHeading}>1. Accounts and Membership</Text>

        <Text style={styles.paragraph}>
          1.1 You must be at least 18 years of age to use this Mobile
          Application. By using this Mobile Application and by agreeing to this
          Agreement, you warrant and represent that you are at least 18 years of
          age.
        </Text>
        <Text style={styles.paragraph}>
          1.2 If you create an account in the Mobile Application, you are
          responsible for maintaining the security of your account and you are
          fully responsible for all activities that occur under the account and
          any other actions taken in connection with it. We may monitor and
          review new accounts before you may sign in and start using the
          Services. Providing false contact information of any kind may result
          in the termination of your account.
        </Text>
        <Text style={styles.paragraph}>
          1.3 You must immediately notify us of any unauthorized uses of your
          account or any other breaches of security. We will not be liable for
          any acts or omissions by you, including any damages of any kind
          incurred as a result of such acts or omissions.
        </Text>
        <Text style={styles.paragraph}>
          1.4 We may suspend, disable, or delete your account (or any part
          thereof) if we determine that you have violated any provision of this
          Agreement or that your conduct or content would tend to damage our
          reputation and goodwill. If we delete your account for the foregoing
          reasons, you may not re-register for our Services. We may block your
          email address and Internet protocol address to prevent further
          registration.
        </Text>

        <Text style={styles.sectionHeading}>2. User Content</Text>

        <Text style={styles.paragraph}>
          2.1 We do not own any data, information, or material ("Content") that
          you submit in the Mobile Application in the course of using the
          Service. You shall have sole responsibility for the accuracy, quality,
          integrity, legality, reliability, appropriateness, and intellectual
          property ownership or right to use of all submitted Content.
        </Text>
        <Text style={styles.paragraph}>
          2.2 We may monitor and review Content in the Mobile Application
          submitted or created using our Services by you. You grant us
          permission to access, copy, distribute, store, transmit, reformat,
          display, and perform the Content of your user account solely as
          required for the purpose of providing the Services to you.
        </Text>
        <Text style={styles.paragraph}>
          2.3 Without limiting any of those representations or warranties, we
          have the right, though not the obligation, to, in our own sole
          discretion, refuse or remove any Content that, in our reasonable
          opinion, violates any of our policies or is in any way harmful or
          objectionable.
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

export default TermsAndServices;
