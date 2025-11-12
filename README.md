# Hi 👋, I'm Luca
```Kotlin
typealias songTitle = String
typealias singer = String

class Lijucay() {
    var age = 21
    val name = "Luca",
    val nationality = "German"
    var currentJob: String? = "Student"
    var jobLocation = "Carl von Ossietzky Universität Oldenburg"
    var hobbies = listOf(
        "Coding",
        "Music",
        "Story-writing"
    )
    var favoriteSongs = mapOf<songTitle, singer>(
        "I can do it with a broken heart" to "Taylor Swift",
        "What was I made for" to "Billie Eilish",
        "My boy only breaks his favorite toys" to "Taylor Swift"
    )
}
```

## My work:
```Java
import de.lijucay.Repository;

public class MyWork() {
    public ArrayList<Repository> getRepositories() {
        ArrayList<Repository> repositories = new ArrayList();

        repositories.add(Repository("Qwotable", "https://github.com/Lijucay/Qwotable"));
        repositories.add(Repository("My website","https://www.lijucay.de"));

        return repositories;
    }
}
```

## My skills:
```Kotlin
class MySkills() {
  val java = Pair("Java", Level.COMPETENT)
  val kotlin = Pair("Kotlin", Level.COMPETENT)
  val python = Pair("Python", Level.NOVICE)
  val html = Pair("HTML", Level.FAMILIAR)
  val css = Pair("CSS", Level.FAMILIAR)
}

enum class Level(val value: Int, val description: String) {
  EXPERT(5, "Mastering intricate concepts effortlessly."),
  PROFICIENT(4, "Confidently solving complex problems daily."),
  COMPETENT(3, "Skilled in various practical applications."),
  FAMILIAR(2, "Understands basics, can navigate tasks."),
  NOVICE(1, "Learning foundations, exploring possibilities.")
}
```

## I have worked with:
![My skills](https://skillicons.dev/icons?i=androidstudio,eclipse,idea,vscode,pycharm,visualstudio)

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/F1F1VMB1F)

<a href="https://lijucay.de/"><img alt="Static Badge" src="https://img.shields.io/badge/Website-%234285F4?style=flat-square&logo=googlechrome&logoColor=ffffff"/></a>
