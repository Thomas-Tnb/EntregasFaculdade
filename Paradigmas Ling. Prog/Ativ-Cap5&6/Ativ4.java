import java.util.ArrayList;

public class Ativ4 {
    public static void main(String[] args) {
        ArrayList<Livro> livros = new ArrayList<>();

        livros.add(new Livro("The Way Of Kings", "Brandon Sanderson", 2010));
        livros.add(new Livro("Words Of Radiance", "Brandon Sanderson", 2018));
        livros.add(new Livro("Wind And Truth", "Brandon Sanderson", 2024));

        System.out.println("Títulos dos livros:");
        for (Livro l : livros) {
            System.out.println(l.titulo);
        }
    }
}
