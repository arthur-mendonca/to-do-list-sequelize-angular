class ErrorMsgManager {
  fixErrorMsg(error) {
    const regex = /,([^,]*)$/;
    const errorMsg = {
      message: error
        ?.replaceAll("Validation error: ", "")
        ?.replace(/\n/g, " ")
        ?.replace(regex, " e$1"),
    };

    return errorMsg;
  }
}

module.exports = new ErrorMsgManager();
