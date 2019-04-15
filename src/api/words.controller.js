import WordsDAO from "../dao/wordsDAO";

export default class WordsController {
  static async apiGetWords(req, res, next) {
   // const wordsList = await WordsDAO.getWords();

    let response = {
      'hello':'world'
      //words: wordsList
      // page: 0,
      // filters: {},
      // entries_per_page: MOVIES_PER_PAGE,
      // total_results: totalNumMovies,
    };
    res.json(response);
  }
}
