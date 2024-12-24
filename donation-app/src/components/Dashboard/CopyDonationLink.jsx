import { CopyToClipboard } from "react-copy-to-clipboard";
const CopyDonationLink = () => {
    const donationLink = "https://example.com/donate";
    return (
        <CopyToClipboard text={donationLink}>
            <button className="btn">Copy Donation Link</button>
        </CopyToClipboard>
    );
};
export default CopyDonationLink;
