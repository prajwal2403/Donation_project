const ShareOnWhatsApp = () => {
    const donationLink = "https://example.com/donate";
    const message = `Hi, I am raising funds for NayePankh Foundation. Please support me by donating through this link ${donationLink} and make a difference!`;
    const handleShare = () => {
        window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, "_blank");
    };
    return <button className="btn" onClick={handleShare}>Share on WhatsApp</button>;
};
export default ShareOnWhatsApp;
