import axios from 'axios';
import stats from '../data/stats.json';

const sendEmail = async (email: string) => {
  // I'm suggesting to use api for sending email, client side is not safe.
  // also we can fetch user`s stats from the server and send it to the email not from the client side.
  try {
    const response = await axios.post('https://deinwerkstattkurier.herokuapp.com/email/sendEmail', { email, stats });
    if (response.status === 200) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};

export { sendEmail };