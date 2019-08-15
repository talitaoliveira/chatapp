import { CometChat } from "@cometchat-pro/chat";
import config from "../config";

//const CCManager = () => {

  export const LISTENER_KEY_MESSAGE = "msglistener";
  export const appId = config.appId;
  export const apiKey = config.appKey;
  export const LISTENER_KEY_GROUP = "grouplistener";

  export const init = () => {
    return CometChat.init(appId);
  }

  export const getMessage = (uid, text, msgType) => {
    if (msgType === 'user') {
      return new CometChat.TexMessage(uid, text, CometChat.MESSAGE_TYPE.TEXT, CometChat.RECEIVER_TYPE.USER);
    }

    return new CometChat.TextMessage(uid, text, CometChat.MESSAGE_TYPE.TEXT, CometChat.RECEIVER_TYPE.GROUPß);
  }

  export const getLoggedInUser = () => {
    return CometChat.getLoggedInUser();
  }

  export const login = (UID) => {
    return CometChat.login(UID, apiKey);
  }

  export const getGroupMessages = (GUID, callback, limit = 30) => {
    const messagesRequest = new CometChat.MessagesRequestBuilder()
      .setGUID(GUID)
      .setLimit(limit)
      .build();
    callback();
    return messagesRequest.fetchPrevious();
  }

  export const sendGroupMessage = (UID, message) => {
    const textMessage = this.getTextMessage(UID, message, "group");
    return CometChat.sendMessage(textMessage);
  }

  export const joinGroup = (GUID) => {
    return CometChat.joinGroup(GUID, CometChat.GROUP_TYPE.PUBLIC, "");
  }

  export const addMessageListener = (callback) =>{
    CometChat.addMessageListener(
      LISTENER_KEY_MESSAGE,
      new CometChat.MessageListener({
        onTextMessageReceived: textMessage => {
          callback(textMessage);
        }
      })
    );
  }

//}

//export default CCManager;
