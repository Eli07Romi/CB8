const SERVER_URL = "https://api.spoonacular.com";
const recipesUrl = "/recipes/random";
const recipesCompleSearchUrl = "/recipes/complexSearch";
const recipesInformationUrl = (id) => `/recipes/${id}/information`;

const generateUrl = (url, params = []) => {
  const urlServerWithAuth = `${SERVER_URL}${url}?apiKey=a5e94249411c40f6a61db801f0d09f8d`;

  if (params && params.length > 0) {
    let paramsUrl = new URLSearchParams();
    params.forEach((p) => {
      paramsUrl.append(p.key, p.value, p.description);
    });

    return urlServerWithAuth + `&${paramsUrl.toString()}`;
  }

  return urlServerWithAuth;
};

export {
  SERVER_URL,
  recipesUrl,
  generateUrl,
  recipesCompleSearchUrl,
  recipesInformationUrl,
};
