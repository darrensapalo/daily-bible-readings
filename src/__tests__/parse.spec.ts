import { toArray } from "rxjs/operators";
import { getScriptures } from "../parse";

describe("parse", () => {

  it("should be able to get multiple scripture sections", (done) => {
 
    const mockHTML = `
<div class="wr-block b-verse bg-white padding-bottom-m">
<div class="container">
  <div class="row">
    <div class="p-wrap col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 col-xxl-6 offset-xxl-3 ">
      <div class="innerblock">
                      <div class="content-header">
            <h3 class="name">Reading 2 </h3>
            <div class="address">
<a href="https://bible.usccb.org/bible/romans/5?1 ">Rom 5:1-2, 5-8</a>
            </div>
          </div>
          <div class="content-body">
            <p>Brothers and sisters:<br>Since we have been justified by faith,<br>we have peace with God through our Lord Jesus Christ,<br>through whom we have gained access by faith<br>to this grace in which we stand,<br>and we boast in hope of the glory of God.</p><p>And hope does not disappoint,<br>because the love of God has been poured out into our hearts<br>through the Holy Spirit who has been given to us.<br>For Christ, while we were still helpless,<br>died at the appointed time for the ungodly.<br>Indeed, only with difficulty does one die for a just person,<br>though perhaps for a good person one might even find courage to die.<br>But God proves his love for us<br>in that while we were still sinners Christ died for us.</p>
          </div>
                  </div>
    </div>
  </div>
</div>
</div>
`;

    const scripture = getScriptures(mockHTML);
    
    scripture
    .pipe(toArray())
    .subscribe((sections) => {
      expect(sections).toBeDefined();
      expect(sections).toHaveLength(1);
      done();
    });

  });

});