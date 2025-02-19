<script lang="ts">
  import Page from "../ui/Page.svelte";
</script>

<Page back="/">
  <h3 class="text-3xl font-bold mb-3">About</h3>

  <article class="markdown-body entry-content container-lg" itemprop="text">
    <p dir="auto">Story Mode is a quick and dirty story based game that uses some of the basic mechanics of the Cypher System to help you randomly tell a story.</p>
    <p dir="auto">You start each scene with a target rating, this is the difficulty of all elements in the scene.  The Scene Status is a d6 roll and the target number is 3 times that roll.  Simple and Easy!</p>
    <p dir="auto">You don't need any character sheets, rule-sets or anything other than your imagination and the ability to form yes and no questions.</p>
    <p dir="auto">The Oracle is based on a d20 roll with the following outcome table:</p>
    <table>
      <thead>
        <tr>
          <th>d20</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>No, and</td>
        </tr>
        <tr>
          <td>2 - 9</td>
          <td>No, but</td>
        </tr>
        <tr>
          <td>10 - 14</td>
          <td>Yes, but</td>
        </tr>
        <tr>
          <td>15 - 19</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td>20</td>
          <td>Yes, and</td>
          </tr>
      </tbody>
    </table>
    <p dir="auto">If your characters need to preform a task that you want to randomize, just say what you are going to do and click the Check button.  The Task will automatically be set to the Difficulty of the Scene and the outcome based on the following table, but you can always change the value.</p>
    <table>
      <thead>
        <tr>
        <th>d20</th>
        <th>Result</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Fail, and</td>
        </tr>
        <tr>
          <td>2 to DC-6</td>
          <td>Fail, but</td>
        </tr>
        <tr>
          <td>DC-5 to DC-1</td>
          <td>Success, but</td>
        </tr>
        <tr>
          <td>DC to DC+4</td>
          <td>Success</td>
        </tr>
        <tr>
          <td>DC+5 +</td>
          <td>Success, and</td>
        </tr>
      </tbody>
    </table>
    <p dir="auto">You can add any text you like at any point in the game.  Add Flavor, tell the story.</p>
    <p dir="auto">If you need a dice roll for something we got you covered too. You can use it to roll for anything, but don't forget to add some text to tell us about what that roll is gonna do. Using a simple <a href="https://dice-roller.github.io/documentation/guide/notation/">dice notation.</a></p>
    <p dir="auto">Need some random inspiration. Click Keywords and you'll get 3 from our list of over 700 words.</p>
  </article>
</Page>