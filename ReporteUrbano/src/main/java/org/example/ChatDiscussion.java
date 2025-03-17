package org.example;

import com.google.cloud.vertexai.VertexAI;
import com.google.cloud.vertexai.api.GenerateContentResponse;
import com.google.cloud.vertexai.generativeai.ChatSession;
import com.google.cloud.vertexai.generativeai.GenerativeModel;
import com.google.cloud.vertexai.generativeai.ResponseHandler;
import java.io.IOException;

public class ChatDiscussion {

    public static void main(String[] args) throws IOException {
        String projectId = "tactile-cinema-451118-g2";
        String location = "southamerica-east1";
        String modelName = "gemini-1.5-flash-002";

        chatDiscussion(projectId, location, modelName);
    }

    // Ask interrelated questions in a row using a ChatSession object.
    public static void chatDiscussion(String projectId, String location, String modelName)
            throws IOException {
        // Initialize client that will be used to send requests. This client only needs
        // to be created once, and can be reused for multiple requests.
        try (VertexAI vertexAI = new VertexAI(projectId, location)) {
            GenerateContentResponse response;

            GenerativeModel model = new GenerativeModel(modelName, vertexAI);
            // Create a chat session to be used for interactive conversation.
            ChatSession chatSession = new ChatSession(model);

            response = chatSession.sendMessage("Maringá é uma boa cidade para se morar?");
            System.out.println(ResponseHandler.getText(response));

//            response = chatSession.sendMessage("What are all the colors in a rainbow?");
//            System.out.println(ResponseHandler.getText(response));
//
//            response = chatSession.sendMessage("Why does it appear when it rains?");
//            System.out.println(ResponseHandler.getText(response));
            System.out.println("Chat Ended.");
        }
    }
}
