import Template from "./Template";
import "./../assets/css/rulesAndPolicies.css";

const RulesAndPolicies = () => {
  return (
    <Template title="Rules of Play & Policies">
      <p>FIFA rules shall govern NYSL play except as modified herein.</p>
      <ul className="rules__container">
        <li className="rules__main">
          <h3>SPORTSMANSHIP</h3>
          <ul className="rules__container">
            <li className="rules__item">
              The common interest that members of the Association share is to
              inspire youth to practice the ideals of sportsmanship and fair
              play. Any player, coach, team, parent, spectator, administrator or
              referee whose behavior detracts from this purpose is subject to
              disciplinary action regardless of technical soccer background,
              expertise, accomplishments or standing.
            </li>
          </ul>
        </li>
        <li className="rules__main">
          <h3>FIFA FIELD REGULATIONS</h3>
          <ol>
            <li className="rules__item">
              <strong>DIMENSIONS.</strong> FIFA Law 1 provides for flexible
              external field dimensions within a given maximum and minimum width
              and length. These dimensions should be adhered to for all fields
              used by teams under 12 and older.
            </li>
            <li className="rules__item">
              <strong>COMPETITION FIELDS.</strong> Fields used within the
              competition program must be a minimum of 100 x 60 yards. Leagues,
              districts or associations participating in the state competition
              program that are unable to provide a field that meets these
              minimum requirements must advise the State Competition Board which
              will assign its Fields Committee to inspect the field and
              recommend to the Board whether or not a waiver of the minimum
              dimensions should be granted. Teams from leagues, districts or
              associations that are unable to provide an acceptable field may be
              required to play all their games away.
            </li>
            <li className="rules__item">
              <strong>FIELDS USED BY YOUNG AGE GROUPS.</strong>
              <ol type="a">
                <li className="rules__item">
                  U-6 play on a field approximately 20 X 40 yards with no
                  penalty areas. Fields for older age groups should be
                  progressively larger.
                </li>
                <li className="rules__item">
                  U-8 plays on a field 40-50 yards in length and 20-30 yards
                  width.
                </li>
                <li className="rules__item">
                  U-10 play on a field 70-80 yards in length and 40-50 yards in
                  width.
                </li>
                <li className="rules__item">
                  In addition, fields used by young age groups may have their
                  internal dimensions and size of goal similarly modified.
                </li>
              </ol>
            </li>
            <li>
              <strong>TEAM BENCH AREAS</strong>
              <ol type="a">
                <li className="rules__item">
                  Recreation & District Programs
                  <ul className="rules__container">
                    <li className="rules__item">
                      The decision for team/spectator placement on the field
                      will be made by the governing body of that team. A team's
                      bench area shall consist of that area at least one (1)
                      yard away from the touchline and extending to twenty yards
                      (20) both ways from the halfway line. In the event that
                      field conditions require team benches to be on the same
                      side of the field, a team's bench area shall consist of
                      that area two (2) yards away from the touchline and
                      extending twenty yards one (1) way from the halfway line.
                    </li>
                    <li className="rules__item">
                      The home team has first choice as to where it wishes to
                      locate its bench area. Coaches and substitutes are
                      required to remain within their bench area during the
                      game. Parents and spectators should occupy the same side
                      of the field as the team they are supporting.
                    </li>
                  </ul>
                </li>
                <li className="rules__item">
                  State Competition League Only
                  <ul className="rules__container">
                    <li className="rules__item">
                      Except where it is determined by the referee to be
                      impractical, team bench areas shall be along the same
                      touchline. Each team bench area shall be located two yards
                      outside the touchline, beginning not closer than five
                      yards from midfield and extending not further than twenty
                      yards from midfield. The home team shall have the right to
                      choose the location of its bench area. Coaches and
                      substitutes must remain within their team's bench area
                      during the game.
                    </li>
                    <li className="rules__item">
                      Parents and spectators must occupy the sideline opposite
                      the team bench areas. Supporters of a team must assemble
                      on the side of the midfield facing the team bench area of
                      that team. There shall be a buffer zone extending ten
                      yards on each side of the midfield that may not be
                      occupied by parents or spectators. Match officials shall
                      be empowered to enforce these provisions and may suspend
                      or terminate games in the event that any team, coach,
                      parent, or spectator declines to abide by requests from
                      match officials to comply with these standards.
                    </li>
                  </ul>
                </li>
              </ol>
            </li>
          </ol>
        </li>
        <li className="rules__main">
          <h3>EQUIPMENT</h3>
          <ul className="rules__container">
            <li className="rules__item">
              We will abide by and accept equipment standards as defined by
              FIFA, USSF and USYSA.
            </li>
          </ul>
        </li>
        <li className="rules__main">
          <h3>NUMBER OF PLAYERS</h3>
          <ul className="rules__container">
            <li className="rules__item">
              <strong>TEAM SIZE.</strong> Except as noted below, team rosters
              shall consist of not less than eleven nor more than eighteen
              players. A team must have at least seven (7) players present and
              able to play before referees are permitted to start a sanctioned
              game. No more than eleven (11) players per team may be on the
              field at any one time during the game.
            </li>
            <li className="rules__item">
              <strong>SIZE OF AGE GROUP TEAMS.</strong> In order to give
              player's maximum opportunity to develop in the game of soccer, U-6
              through U-1O play modified rules and size of roster as stated in
              United States Youth Soccer Association (USYSA) rules. It is
              strongly recommended that U-6 and U-8 play 4 v 4. UYSA shall not
              sanction games involving teams under 10 or younger unless such
              games are conducted with not more than eight (8) players per side.
              (National rule 4036 section 2)
            </li>
            <li className="rules__item">
              Recreational/Developmental players at other ages or where numbers
              in the playing area are low are strongly encouraged to play
              small-sided games on reduced field size.
            </li>
          </ul>
        </li>
        <li className="rules__main">
          <h3>SUBSTITUTIONS</h3>
          <ul className="rules__container">
            <li className="rules__item">
              Teams may make an unlimited number of substitutions at the times
              indicated below. A player who has been replaced may re-enter the
              game as a substitute at a later time.
              <ol>
                <li className="rules__item">
                  {" "}
                  Prior to a throw-in your favor.
                </li>
                <li className="rules__item">
                  {" "}
                  Prior to a goalkick by either team.
                </li>
                <li className="rules__item"> After a goal by either team.</li>
                <li className="rules__item">
                  After an injury, by either team, when the referee stops play.
                </li>
                <li className="rules__item"> At half time.</li>
                <li className="rules__item">
                  When a player has been "cautioned", only the player receiving
                  "caution" may be substituted.
                </li>
              </ol>
            </li>
          </ul>
        </li>
        <li className="rules__main">
          <h3>CONFISCATED PLAYER PASSES</h3>
          <ul className="rules__container">
            <li className="rules__item">
              Passes of any individual(s) ejected from any match shall be
              retained after the match by the referee. The pass of any
              individual who has received a third caution (yellow card) during a
              playing year shall be confiscated by the referee at the conclusion
              of the match in which the third caution was received. That player
              will be suspended from playing in the next game in which the
              offending participant would otherwise be eligible to participate.
              This process will continue so that for every third yellow card
              received during a playing year, the player will be suspended from
              playing in the next game (after the receipt of a third yellow
              card) for which the offending participate would otherwise be
              eligible to participate. The referee shall deliver all confiscated
              passes to the UYSA State Office within forty-eight (48) hours of
              the conclusion of the match.
            </li>
          </ul>
        </li>
        <li className="rules__main">
          <h3>ALL-PLAY</h3>
          <ul className="rules__container">
            <li className="rules__item">
              All-play means that every recreation player on every team shall
              play at least fifty percent of each game. Coaches in the
              competition program are encouraged to play their players 50% of
              each game.
              <ul className="rules__container">
                <li className="rules__item">
                  A Coach shall be permitted to not play a player 50% of each
                  game under special circumstances, e.g., unexcused absences
                  from practice and/or games, ungentlemanly conduct at practice
                  and/or games, and injuries.
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="rules__main">
          <h3>PLAYER'S EQUIPMENT</h3>
          <ul className="rules__container">
            <li className="rules__item">
              Where the uniform colors of both teams are so similar that the
              referee orders a change, the designated home team must change to
              colors distinct from those of the opponent.
            </li>
          </ul>
        </li>
        <li className="rules__main">
          <h3>MIXED TEAMS</h3>
          <ul className="rules__container">
            <li className="rules__item">
              <strong>GIRLS PLAYING ON BOYS' TEAMS. </strong>Girls are eligible
              to play on boys' teams with parent/guardian permission.
            </li>
            <li className="rules__item">
              <strong>TYPES OF TEAMS. </strong>Teams with females only are Girls
              Teams. All others are Boys Teams.
            </li>
          </ul>
        </li>
        <li className="rules__main">
          <h3>COACHING FROM THE SIDELINES</h3>
          <ul className="rules__container">
            <li className="rules__item">
              Coaching from the sidelines, i.e., giving direction to one's own
              team on points of strategy and position, is permitted provided
              that:
              <ol>
                <li className="rules__item">
                  No mechanical, electrical or other devices are used to amplify
                  the voice.
                </li>
                <li className="rules__item">
                  The tone of voice is informative and not a harangue.
                </li>
                <li className="rules__item">
                  The coaching takes place within the team's bench area.
                </li>
                <li className="rules__item">
                  No coach, substitute, player or spectator is to make
                  derogatory remarks or gestures to the referees, linesmen,
                  players, substitutes or spectators.
                </li>
                <li className="rules__item">
                  No coach, player, substitute or spectator is to use profanity
                  or incite, in any manner, disruptive behavior of any kind.
                </li>
              </ol>
            </li>
          </ul>
        </li>
        <li className="rules__main">
          <h3>GAME TERMINATION</h3>
          <ul className="rules__container">
            <li className="rules__item">
              Any game terminated after 15 minutes into the second half by the
              referee by reason of the elements, or by reason of grave disorder
              on the part of the coaches, players or spectators of a team that
              is losing at the point that the game is terminated, shall stand as
              a completed game. If a team is ahead and the game is called
              because of their actions they will lose the game 1-0.
            </li>
          </ul>
        </li>
        <li className="rules__main">
          <h3>CONDITIONS OF REPLAY OF GAMES</h3>
          <ul className="rules__container">
            <li className="rules__item">
              Any game which is required to be replayed as a result of any
              protest or appeal, shall be subject to the following conditions:
              <ol>
                <li className="rules__item">
                  The game shall be replayed on the same field, as was the
                  suspended or protested game, unless otherwise agreed by the
                  coaches.
                </li>
                <li className="rules__item">
                  Impartial referees shall be assigned to the new game.
                </li>
                <li className="rules__item">
                  The PROTEST AND APPEALS COMMITTEE shall have the power to
                  impose such additional conditions on the replay of the game,
                  as it deems appropriate under the circumstances.
                </li>
              </ol>
            </li>
          </ul>
        </li>
        <li className="rules__main">
          <h3>REFEREE RESPONSIBILITIES</h3>
          <ul className="rules__container">
            <li className="rules__item">
              The referee shall verify the identity of the players and coaches
              with his/her player pass. He shall collect the passes of those
              players and coaches who are to participate in the game. The
              referee must allow no player into the game for whom he/she has no
              pass.
            </li>
            <li className="rules__item">
              Upon completion of the game, the referee shall send his/her report
              to the UYSA offices within four (4) days, holidays excluded. If a
              coach or a player is ejected, the referee report form is required
              within forty-eight (48) hours along with the player/coach pass.
            </li>
            <li>A referee report form must be filed for every game played.</li>
            <li className="rules__item">
              Each team must determine whether or not referees are registered
              prior to the start of each game. Upon request, referees
              officiating at any game must willingly and without bias, show
              documentation regarding their certification level and registration
              standing with the USSF to coach, assistant coach, or team captain
              of teams participating in that game. Prior to the game a coach may
              decide to postpone the game if the referees do not produce the
              requested documentation. The game is to be replayed at a later
              date.
            </li>
            <li className="rules__item">
              Referees not complying with this section will be referred to the
              Disciplinary Committee.
            </li>
          </ul>
        </li>
      </ul>
    </Template>
  );
};

export default RulesAndPolicies;
