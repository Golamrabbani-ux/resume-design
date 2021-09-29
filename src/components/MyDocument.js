import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: 'white',
    color:'black'
  },
  section: {
    padding: '50 25',
  },
  view:{
    marginBottom: 50,
  },
  title:{
    fontSize: 28,
    fontWeight: 700,
    marginBottom: 8,
  },
  smallTille:{
    fontSize: 12,
    paddingRight: 100,
    marginBottom: 3,
  }
});

const MyDocument = ({resumeInfo}) => {
  const { educationalInfo, personalInfo, skills, salaryAndAboutInfo } = resumeInfo;
  return(
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>

          <View style={styles.view}>
            <Text style={styles.title}>{`${personalInfo?.firstName} ${personalInfo?.lastName}`}</Text>
            <Text style={styles.smallTille}>E-mail: {personalInfo?.email}</Text>
            <Text style={styles.smallTille}>Phone: {personalInfo?.mobile}</Text>
            <Text style={styles.smallTille}>
              Address: 
              {`${personalInfo?.address}, ${personalInfo?.city}, ${personalInfo?.zipCode}, ${personalInfo?.country}`}
            </Text>
          </View>

          <View style={styles.view}>
            <View style={{marginBottom: 30}}>
              <Text style={styles.title}>Educational Qualification</Text>
              {
                educationalInfo?.map((item, index) =>
                  <View key={index} style={{marginBottom: 15}}>
                    <Text style={styles.smallTille}>Institute: {item?.instituteName}</Text>
                    <Text style={styles.smallTille}>Major/Group: {item?.subjectGroup}</Text>
                    <Text style={styles.smallTille}>GPA/CGPA: {item?.result}</Text>
                    <Text style={styles.smallTille}>Passing Year: {item?.passingYear}</Text>
                  </View>

                )
              }
            </View>
          </View>

          <View style={styles.view}>
            <Text style={styles.title}>Skills</Text>
            <Text style={styles.smallTille}>Core Skills:  {skills?.coreSkills}</Text>
            <Text style={styles.smallTille}>Soft Skills:  {skills?.softSkills}</Text>
            <Text style={styles.smallTille}>Familiar:   {skills?.familiarSkills}</Text>
          </View>

          <View style={styles.view}>
            <Text style={styles.title}>About and Salary</Text>
            <Text style={styles.smallTille}>Present Salary:  {salaryAndAboutInfo?.presentSalary}</Text>
            <Text style={styles.smallTille}>Expected Salary:  {salaryAndAboutInfo?.expectedSalary}</Text>
            <Text style={styles.smallTille}>{salaryAndAboutInfo?.description}</Text>
          </View>

        </View>
      </Page>
    </Document>
  )
}

export default MyDocument

