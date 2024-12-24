import { useParams } from "react-router-dom";

const Donation = () => {
    const { referralCode } = useParams();
    return (
        <div>
            <h1>Donate</h1>
            <p>Referral Code: {referralCode}</p>
            {/* Add a payment gateway here */}
        </div>
    );
};
export default Donation;
