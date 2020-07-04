import gql from 'graphql-tag';

export const CHANGE_LOCATION = gql`
  mutation saveAppointmentForm($name: String!, $date: String!, $clinic_id: Int!, $phone: String!) {
    Appointment(name: $name, date: $date, clinic_id: $clinic_id, phone: $phone) {
      processed
      error
      messages
    }
  }
`;
