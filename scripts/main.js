const informationBlock = document.querySelector(".container-info__auction");

function contentToHtml(text) {
	return text
		.split("\n\n")
		.map((paragraph) => `<p>${paragraph}</p>`)
		.join("");
}

informationBlock.innerHTML = contentToHtml(
	"The <b>Save The Six</b> campaign is a collaborative network of individuals, companies and creators with a vested interest in the survival of the District Six Museum. We’re calling on local artists, creators and photographers to join us in our efforts to raise funds for the museum through the means of a digital auction hosted by <b>Between 10&5</b> with the support of <b>Orms</b> and <b>BASA</b>. \n\nFor more information and to donate an artwork for the auction please see the above PDF or click the submission button. All proceeds go directly to the operating cost of the museum."
);
