import gql from 'graphql-tag';

export const SAVE_APPOINTMENT = gql`
  mutation saveAppointmentForm($name: String!, $date: String!, $clinic_id: Int!, $phone: String!) {
    Appointment(name: $name, date: $date, clinic_id: $clinic_id, phone: $phone) {
      processed
      error
      messages
    }
  }
`;

export const SAVE_NONRESIDENT = gql`
  mutation saveForeignersForm(
    $city: String!
    $name: String!
    $age: Int!
    $gender: Int!
    $worry: String!
    $text: String!
    $phone: String!
  ) {
    Foreigners(
      city: $city
      name: $name
      age: $age
      gender: $gender
      worry: $worry
      text: $text
      phone: $phone
    ) {
      processed
      error
      messages
    }
  }
`;

export const SAVE_QUESTION = gql`
  mutation saveFaqForm(
    $category: Int!
    $name: String!
    $age: Int!
    $gender: String!
    $text: String!
    $theme: Int!
    $email: String!
  ) {
    Faq(
      category: $category
      name: $name
      age: $age
      gender: $gender
      text: $text
      theme: $theme
      email: $email
    ) {
      processed
      error
      messages
    }
  }
`;

export const SAVE_REVIEW = gql`
  mutation saveReviewForm($city: Int!, $name: String!, $email: String!, $text: String!) {
    Review(city: $city, name: $name, email: $email, text: $text) {
      processed
      error
      messages
    }
  }
`;
