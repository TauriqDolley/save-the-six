const auctionInfo = document.querySelector(".container-auction__submission");

function contentToHtml(text) {
	return text
		.split("\n\n")
		.map((paragraph) => `<p>${paragraph}</p>`)
		.join("");
}

auctionInfo.innerHTML = contentToHtml(
	"\n\n <b>Submission Details:</b>\n\n Artwork, prints and sculptures/created items are all accepted for submission, however, we will be curating the final selection as we are unable to auction all works submitted. We require an image of your artwork sent via WeTransfer (see the submission link). It does not need to be a professional image - all work will be photographed before auctioned.If your artwork is digital and requires printing please send us the file via WeTransfer. However, there will be a limit as to the size and substrate of the print.\n\n NB: When submitting your attachments via WeTransfer you need to select the “send as link” option and NOT “send as email”. Once you have that link you need to copy and paste it into the field below.\n\nDeadline for submissions: 23 October 2020\n\nPlease contact gemma@gemmashepherd.com with any questions.\n\n You will receive a mail with drop-off / collection details should your work be accepted for the auction\n\nTerms and Conditions:\n\nBy submitting your work, you agree to donate all proceeds to the District Six Museum. Any unsold work will be returned to the artist.\n\n For updates follow and like the District Six Museum on Instagram and Facebook\n\nIG: @districtsixmuseumFB: District Six Museum"
);
