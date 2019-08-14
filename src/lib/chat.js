import { CometChat } from "@cometchat-pro/chat";
import config from "../config";

const CCManager = () => {

  const LISTENER_KEY_MESSAGE = "msglistener";
  const appId = config.appId;
  const apiKey = config.appId;
  const LISTENER_KEY_GROUP = "grouplistener";

  const init = () => {
    return CometChat.init(appId);
  }

  const getMessage = (uid, text, msgType) => {
    if (msgType === 'user') {
      return new CometChat.TexMessage(uid, text, CometChat.MESSAGE_TYPE.TEXT, CometChat.RECEIVER_TYPE.USER);
    }

    return new CometChat.TextMessage(uid, text, CometChat.MESSAGE_TYPE.TEXT, CometChat.RECEIVER_TYPE.GROUPß);
  }

  const getLoggedInUser = () => {
    return CometChat.getLoggedInUser();
  }

  const login = () => {
    return CometChat.login(UID, this.apiKey);
  }

  const getGroupMessages = () => {
    const messagesRequest = new CometChat.MessagesRequestBuilder()
      .setGUID(GUID)
      .setLimit(limit)
      .build();
    callback();
    return messagesRequest.fetchPrevious();
  }

  const sendGroupMessage = (UID, message) => {
    const textMessage = this.getTextMessage(UID, message, "group");
    return CometChat.sendMessage(textMessage);
  }

  const joinGroup = () => {
    return CometChat.joinGroup(GUID, CometChat.GROUP_TYPE.PUBLIC, "");
  }

  const addMessageListener = () =>{
    CometChat.addMessageListener(
      this.LISTENER_KEY_MESSAGE,
      new CometChat.MessageListener({
        onTextMessageReceived: textMessage => {
          callback(textMessage);
        }
      })
    );
  }

}
