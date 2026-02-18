---
date: '2025-12-12'
draft: false
title: 'Tackle Box (2025)'
bigimg: [{src: "/img/tacklebox.jpg"}]
---

{{<faint>}}
    Unity Engine, 3D, C#, Git, GitHub, Scriptable Objects, Scrum, Unity Timeline, Unity Behavior Graph
{{</faint>}}

<br>

{{<toc>}}


## About the game
---

Tackle Box: The First Catch is a fishing-fighting hybrid where you play as an old man and you need to fight every catch with your bare hands.

We worked on the game as a team of 7 people from August 2025 to December 2025 as a part of our 3rd-year studies at Jamk University of Applied Sciences. The game was released on Steam on 12.12.2025.

<br>
<iframe src="https://store.steampowered.com/widget/4078290/" frameborder="0" width="646" height="190" class="game-widget"></iframe>

## My contributions
---
### Gameplay
* Created a **robust and expandable** system for handling different phases of gameplay (e.g. moving from fishing to fighting) using **Unity's Behavior Graphs**.
* **Collaborated with designers** to implement the fighting system.
* Created fishing minigame by **iterating** over several prototypes.
* Worked with a 3D artist to create an **efficient workflow** to implement 12+ fish enemies.
    * Got it down to ~15 minutes to implement a new one
* Created cutscenes using **Unity's Timeline System**.
* Implemented 22 Steam Achievements using the **Steamworks API**.

### UI
* **Worked with UI artist** to plan and implement the game's UI.
* Implemented a system to dynamically display appropriate **button prompts** for controller/keyboard.
* Created a simple dialogue system using **Scriptable Objects**.

### Testing
* Actively participated in planning, setting up and executing testing sessions, based on my experiences with [Epistasis](/game/epistasis).
* Observed testers, analyzed feedback and compiled it to a concise list of issues.

### Workflow
* Maintained an **implementation plan** and worked with the visual and sound team to keep them up to date on the necessary assets.

### Audio
* Implemented audio using an open-source plugin.

### Publishing
* Worked with artists and writers for the content of the Steam store page.
* Created and set up Mac version of the game on Steam.


## Highlight: Fishing minigame

---

### The prototyping process

In the first stages of development, there was a lot of discussion about the game's fishing minigame. 

We knew that we were going to have one, but we hadn't really figured out the specifics of how it should work, and 
decided that the best way to figure it out was to just prototype something playable and go from there.

I was responsible for this and so, I got to work.

#### 1st prototype

<img src="/img/tacklebox-fishingproto1.webp" class="figure"/>

After around a day, I had the first prototype ready.

For it, I had a few requirements to work with:
* The game had to have a mechanic based on draining the fish's energy to catch it.
* It had to last around 15 seconds.
* It had to be playable with a mouse and a controller.

The prototype was quite simple. You could pull the fish in any direction with the mouse, but pulling the fish against its movement (indicated by the arrow) lowered its energy.

The control scheme could also work with a control stick, although it would not be implemented for a while.

Now, if you're finding it difficult to make sense of what's happening in the video above, then you have spotted the problem.

It was quickly apparent that the gameplay and objective were not very clear, and not really very fun when you figured it out either.

#### 2nd prototype

<img src="/img/tacklebox-fishingproto2.webp" class="figure"/>

With this, I got back to the drawing board and developed the second prototype.

This version is a lot more rhythm game-like, where groups of arrows spawn one by one and the player needs to position the mouse on them in time. The arrows would spawn roughly in the opposite direction of where the fish is moving, and positioning the mouse correctly would pull the fish and drain itss energy.

While this version was a lot more clear and generally received better feedback, another problem had presented itself. It didn't really feel like fishing.

I figured that this was mainly because of the nudge-y feel, as well as the fact that you could pull the fish in any direction, including away from the player.

Now, the game's focus wasn't on being a realistic fishing simulator, but I felt like I could come up with a system where there doesn't have to be a choice between fun and believability, so I decided to try again.

#### 3rd prototype

<img src="/img/tacklebox-fishingproto3.webp" class="figure"/>

In some ways, the 3rd prototype could be seen as a re-do of the first one.

The gameplay is once again based on an action of constant pulling, but I restricted the playable angle from 360° to a much smaller slice and used an overlay UI to visualize which angle the player was pulling and needed to pull. In fact, the overlay UI was the only part I did for the initial version of this.

It got received well enough that I figured it would be a good base for the final version.

#### Final developments
<img src="/img/tacklebox-fishingfinal1.webp" class="figure"/>

Afterwards, there was work in polishing the minigame, tweaking and iterating on the mechanics and implementing visual assets. At this point, the team's other programmer occasionally implemented and worked on the minigame's codebase as well.

Overall, I'm glad about how this process went, and I think I learned a good amount because of it. Of course, the result probably could have been even better, but at some point the time restraints kicked in and I had to prioritize other things.

### Code overview of the final version 


#### Input angle

In the fishing minigame, the player must catch a fish by draining its energy.

To do this, the player must keep their fishing rod in line with the bobber, which is controlled by the angle of the mouse from the screen's center
(or the control stick).

First, this angle is calculated.

```csharp
// in FishingPhase.cs
float inputDir = 
    InputManager.UsingGamepad
    ? gamepadPositionInput.ReadValue<Vector2>()
    : Utils.GetMouseDirection(positionInput.ReadValue<Vector2>());

if (InputManager.UsingGamepad)
{
    float stickAngle = Vector2.SignedAngle(Vector2.left, inputDir);
    float stickAngle01 = Mathf.InverseLerp(-90, 90, stickAngle);

    float modifiedAngle = Mathf.Lerp(-baseAngleRadius / 2, baseAngleRadius / 2, stickAngle01) * Mathf.Deg2Rad;
    inputDir = new Vector2(-Mathf.Cos(modifiedAngle), -Mathf.Sin(modifiedAngle));
}

float inputAngle = Vector2.SignedAngle(Vector2.up, inputDir);

holdPhaseInput.TargetAngle = holdPhaseInput.GetAngleClamped(inputAngle - 90f);
```

There are a few things going on here. While the mouse angle is quite straightforward, we found that playing with such a narrow angle wasn't too much fun on a control stick. So, the angle is modified to be a bit wider, so that pushing straight up on the stick goes to the topmost point of the playable area.

The input is then passed to the `FishingInput` script as the `TargetAngle`, which the script's `CurrentAngle` will try to match over time.

```csharp
// in FishingInput.cs

void Update()
{
    float dt = Time.deltaTime * timeScale;
    
    float angleDifference = Mathf.DeltaAngle(CurrentAngle, TargetAngle);
    float targetVelocity = Mathf.Clamp(angleDifference / (maxSpeed / slowdownModifier), -1, 1) * maxSpeed;

    CurrentVelocity = Mathf.MoveTowards(CurrentVelocity, targetVelocity,
        acceleration * dt);

    CurrentAngle += CurrentVelocity * dt;
    CurrentAngle %= 360;
}
```

It does this by having parameters for acceleration and velocity, which are applied to `CurrentAngle`. Just doing this had an effect of the angle constantly "bouncing" back and forth, so I had to add some friction using another parameter.

In-game, this then has an overshooting effect only when the target is moved (player is moving the mouse/stick) too fast. The idea was to give the fishing rod a feeling of weight.

<img src="/img/tacklebox-fishingfinal2.webp" class="figure"/>

Afterwards, the input script's angle is used to display the visuals and such.
```csharp
// in FishingPhase.cs
inputSpriteParent.eulerAngles = new Vector3(0, 0, holdPhaseInput.CurrentAngle);
```

#### Target angle

In the game, the player is trying to match their fishing rod to the bobber, which is also constantly moving back and forth.

I did this using the `InputAngle` script, the same one used for player input.

```csharp
void UpdateTargetAngle()
{
    bool _targetClockwise = holdPhaseTargetInput.TargetAngle < holdPhaseTargetInput.CurrentAngle;
    if (_targetClockwise != targetInClockwiseDirection || Mathf.Abs(holdPhaseTargetInput.CurrentVelocity) < 1)
    {
        float angleRange = (holdPhaseTargetInput.angleRadius * 0.5f) / 2;
        holdPhaseTargetInput.TargetAngle = Random.Range(-angleRange, angleRange);
        targetInClockwiseDirection = _targetClockwise;
    }
}
```

The script simply randomizes a target angle, and re-randomizes it whenever the bobber passes over the current one.

I'm quite happy with the solution, as it was very fast to implement while still allowing the player and target parameters to be adjusted separately.

#### Energy and line durability

In order to win the fishing minigame, the player has to drain all of the fish's energy.

This is done by calculating a score from the angle difference between the fishing rod's and the bobber's current angles, and perpetually applying it to reduce the fish's energy.

```csharp
// in FishingPhase.cs
float angleDifference = Mathf.Abs(Mathf.DeltaAngle(holdPhaseInput.CurrentAngle, targetAngle));

float score = Mathf.InverseLerp(maxAngleDifference, minAngleDifference, angleDifference);
score = score * score * score;

fishEnergy -= score / catchTime * GameManager.instance.GetEffectValue("reelspeed") * scaledDeltaTime;
fishEnergy = Mathf.Clamp01(fishEnergy);
```

Once the energy is low enough, the player can yank the fish out of the water.

Worth noting that this applies only if the player is holding down left click, but in hindsight, this didn't serve much purpose and pretty much just led to players being confused.

The same "score" is used to reduce the player's line durability, with it breaking faster if the player is further off from the target. If that reaches 0, the player loses.
```csharp
// in FishingPhase.cs
lineDurability -= scaledDeltaTime / lineBreakDuration * (1 - score);
```

## What I learned
---
Overall, I learned most about making a new type of game and working with a team of artists. Its fragmented gameplay loop was interesting to work with and it got me to approach the development in a way that I hadn't before. It got me to think of it much more in terms of systems and animations, as well as having me use parts of Unity that I wouldn't have touched otherwise.

Part of the project was to publish the game on Steam as well, so I got some valuable experience of figuring that out and implementing features of the Steamworks API in Unity.

<a href="https://github.com/attemptedbattery/tackle-box" role="button" class="btn btn-primary btn-lg btn-block"><span class="fa fab fa-xl fa-github"></span> View source</a>