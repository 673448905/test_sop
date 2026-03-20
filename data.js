const sopData = [
  {
    title: 'FMS 基础筛查 & 高阶功能容量表现测试 (Capacity SOP)',
    content: `<h1>📊 FMS基础筛查 & 高阶功能容量测试 (Capacity SOP)</h1>
    
    <div class="card">
        <h2>一、 FMS 评分核心法则</h2>
        <p>在进行任何容量(Capacity)或爆发力测试前，受试者必须通过FMS确立基础动作能力。FMS使用0-3分的评分等级，双侧测试取最低分作为该项最终得分。</p>
        <table>
            <tr>
                <th>得分</th>
                <th>像素级评判标准</th>
                <th>干预与进阶指示</th>
            </tr>
            <tr>
                <td><span class="badge b-3">3 分</span></td>
                <td>受试者能够完美、无任何代偿地完成动作。</td>
                <td>可安全进入负重、高阶容量与表现(Capacity/Performance)测试。</td>
            </tr>
            <tr>
                <td><span class="badge b-2">2 分</span></td>
                <td>受试者能完成动作，但在完成基本动作时产生了某种形式的代偿。</td>
                <td>需进行纠正性训练以优化模式，施加负重前需谨慎。</td>
            </tr>
            <tr>
                <td><span class="badge b-1">1 分</span></td>
                <td>受试者无法完成动作模式，或无法保持标准起始姿势。</td>
                <td>禁止盲目施加负重，需作为纠正性干预的最高优先级。</td>
            </tr>
            <tr>
                <td><span class="badge b-0">0 分</span></td>
                <td>测试过程中或在排除性(Clearing)测试中出现任何部位的疼痛。</td>
                <td>立即停止该模式，转介使用SFMA进行临床医疗诊断。</td>
            </tr>
        </table>
    </div>

    <div class="card">
        <h2>二、 FMS 7大动作筛查与排除测试SOP</h2>

        <!-- 1. 深蹲 -->
        <details>
            <summary>1. 深蹲评估 (Deep Squat)</summary>
            <div class="step-box">
                <p><strong>动作准备：</strong>双脚分开与肩同宽。双手握住木棒刚举过头顶，双肘屈曲90度，然后向上推直木棒。</p>
                <p><strong>动作执行：</strong>保持脚跟紧贴地面，身体逐渐下降进入深蹲姿势。</p>
                <ul>
                    <li><span class="badge b-3">3分：</span>上半身与胫骨平行或更垂直；股骨低于水平面；膝关节与脚尖对齐；木棒在双脚正上方。</li>
                    <li><span class="badge b-2">2分：</span>脚跟垫高(如使用测试板)后，能够达到上述3分的标准。</li>
                    <li><span class="badge b-1">1分：</span>即使脚跟垫高，股骨也无法低于水平面，或失去腰椎中立位。</li>
                </ul>
            </div>
        </details>

        <!-- 2. 跨栏架步 -->
        <details>
            <summary>2. 跨栏架步评估 (Hurdle Step) - 需双侧测试</summary>
            <div class="step-box">
                <p><strong>动作准备：</strong>栏架高度调整至受试者胫骨粗隆处。脚尖在栏架正下方。木棒置于肩后。</p>
                <p><strong>动作执行：</strong>保持脊柱和支撑腿伸展，跨过障碍物，用跨栏腿的脚跟触地后还原。</p>
                <ul>
                    <li><span class="badge b-3">3分：</span>髋、膝、踝在矢状面保持对齐；腰椎无明显移动；木棒与栏架保持平行。</li>
                    <li><span class="badge b-2">2分：</span>动作完成，但髋/膝/踝未对齐，或腰椎代偿性移动，木棒与栏架不平行。</li>
                    <li><span class="badge b-1">1分：</span>脚触碰到栏架，或完全失去平衡。</li>
                </ul>
            </div>
        </details>

        <!-- 3. 直线弓箭步 -->
        <details>
            <summary>3. 直线弓箭步评估 (In-Line Lunge) - 需双侧测试</summary>
            <div class="step-box">
                <p><strong>动作准备：</strong>后脚尖至前脚跟的距离等于受试者胫骨长度。木棒触及后脑、胸椎和骶骨。</p>
                <p><strong>动作执行：</strong>后膝下沉接触前脚跟后方的测试板后站起。</p>
                <ul>
                    <li><span class="badge b-3">3分：</span>躯干无代偿；双脚保持在矢状面；后腿膝关节精准触碰前腿脚跟后的测试板。</li>
                    <li><span class="badge b-2">2分：</span>躯干出现明显倾斜或移动；双脚未能保持在板上；后膝未能碰到前跟。</li>
                    <li><span class="badge b-1">1分：</span>完全失去平衡，或无法完成下蹲动作。</li>
                </ul>
            </div>
        </details>

        <!-- 4. 肩关节灵活性 -->
        <details>
            <summary>4. 肩关节灵活性 (Shoulder Mobility) - 附碰撞排除测试</summary>
            <div class="step-box">
                <p><strong>基线测量：</strong>手掌长度（腕横纹到中指尖）。</p>
                <p><strong>动作执行：</strong>双手握拳（拇指在内），同时在背后上下交汇，尽可能靠近。</p>
                <ul>
                    <li><span class="badge b-3">3分：</span>两拳距离 ≤ 1个手掌长度。</li>
                    <li><span class="badge b-2">2分：</span>两拳距离 ≤ 1.5个手掌长度。</li>
                    <li><span class="badge b-1">1分：</span>两拳距离 > 1.5个手掌长度。</li>
                </ul>
                <p class="warning"><strong>肩部排除测试 (痛=0分)：</strong>将手掌放在对侧肩膀上，主动抬高该侧手肘。如有任何疼痛，此项总分直接记0分。</p>
            </div>
        </details>

        <!-- 5. ASLR -->
        <details>
            <summary>5. 主动直腿抬高 (ASLR) - 需双侧测试</summary>
            <div class="step-box">
                <p><strong>动作准备：</strong>仰卧，测试板放在膝盖下方，双臂平放于体侧。</p>
                <p><strong>动作执行：</strong>保持脚踝背屈及膝盖伸直，尽可能高地抬起单腿。对侧腿必须保持贴板。</p>
                <ul>
                    <li><span class="badge b-3">3分：</span>内踝垂线落在大腿中部与髂前上棘(ASIS)之间。</li>
                    <li><span class="badge b-2">2分：</span>内踝垂线落在大腿中部与膝关节线之间。</li>
                    <li><span class="badge b-1">1分：</span>内踝垂线落在膝关节线以下。</li>
                </ul>
            </div>
        </details>

        <!-- 6. 躯干稳定性 -->
        <details>
            <summary>6. 躯干稳定性俯卧撑 (TSPU) - 附脊柱伸展排除测试</summary>
            <div class="step-box">
                <p><strong>动作准备：</strong>俯卧，双膝伸直。</p>
                <p><strong>动作执行：</strong>保持脊柱刚性，整体撑起身体，腰椎无“滞后(塌腰)”。</p>
                <ul>
                    <li><span class="badge b-3">3分：</span>男性双手大拇指与前额平齐；女性与下颌平齐，完成1次标准俯卧撑。</li>
                    <li><span class="badge b-2">2分：</span>男性双手移至下颌平齐；女性移至锁骨平齐，完成1次标准俯卧撑。</li>
                    <li><span class="badge b-1">1分：</span>在2分的位置上也无法完成动作，或腰椎明显塌陷。</li>
                </ul>
                <p class="warning"><strong>脊柱伸展排除测试 (痛=0分)：</strong>俯卧姿势下，做眼镜蛇式撑起上半身(Prone Press-up)。如有疼痛记0分。</p>
            </div>
        </details>

        <!-- 7. 旋转稳定性 -->
        <details>
            <summary>7. 旋转稳定性 (Rotary Stability) - 附脊柱屈曲排除测试</summary>
            <div class="step-box">
                <p><strong>动作准备：</strong>四足跪姿，测试板跨在双膝和双手之间。</p>
                <p><strong>动作执行：</strong>伸展同侧手脚，然后收缩使同侧手肘碰膝盖。如不行，降级为对侧（对角线）手脚相碰。</p>
                <ul>
                    <li><span class="badge b-3">3分：</span>同侧手脚伸展平行于测试板，且手肘能触碰同侧膝盖，躯干无代偿。</li>
                    <li><span class="badge b-2">2分：</span>对角线（对侧）手脚伸展平行于测试板，且手肘能触碰对侧膝盖。</li>
                    <li><span class="badge b-1">1分：</span>对角线模式也无法完成，失去平衡。</li>
                </ul>
                <p class="warning"><strong>脊柱屈曲排除测试 (痛=0分)：</strong>四足跪姿，臀部后坐至脚跟(婴儿式)。如有疼痛记0分。</p>
            </div>
        </details>
    </div>

    <div class="card">
        <h2>三、 高阶功能容量与表现测试 (Capacity & Performance)</h2>
        <p>当受试者在FMS中无0分且单项均≥2分时，可进入高阶的容量筛查。以下测试精准评估爆发力、敏捷性及上下肢无氧容量。</p>

        <details>
            <summary>1. 闭链上肢稳定性测试 (CKCUEST) - 上肢容量评估</summary>
            <div class="step-box">
                <p><strong>测试目的：</strong>测量上肢闭链动力下的稳定性、耐力与功率输出。</p>
                <p><strong>测试设定：</strong>在地面上贴两条运动胶带，间隔 <span class="measurement">36英寸 (约91厘米)</span>。</p>
                <p><strong>执行动作：</strong>
                    1. 受试者呈标准俯卧撑姿势（双手分别位于胶带外侧）。<br>
                    2. 计时开始，受试者交替移动单手去触摸另一侧的胶带。<br>
                    3. 尽可能快地在15秒内完成“雨刮器”式的触线移动。<br>
                    4. 取3次测试的平均触线次数。
                </p>
                <p><strong>数据换算 (爆发力功率)：</strong> 功率 = [ 68% × 体重(磅) × 触线的平均次数 ] ÷ 15秒</p>
                <p><strong>临床标准：</strong> 大学生未受伤男性棒球运动员的平均触线次数为 <span class="measurement">30.41 ± 3.87 次</span>。</p>
            </div>
        </details>

        <details>
            <summary>2. T形敏捷性测试 (T-Test) - 多向移动容量</summary>
            <div class="step-box">
                <p><strong>测试目的：</strong>测试前后、侧滑步多方向的速度、灵敏性和身体控制。</p>
                <p><strong>测试设定：</strong>放置4个锥桶呈T形。起始点至中心锥桶(B) 10码；B向左至C锥桶 5码；B向右至D锥桶 5码。</p>
                <p><strong>执行动作：</strong>
                    1. 冲刺10码，右手触碰中心锥桶B。<br>
                    2. 侧滑步向左5码，左手触碰锥桶C。<br>
                    3. 侧滑步向右10码，右手触碰锥桶D。<br>
                    4. 侧滑步向左5码返回中心锥桶B，左手触碰。<br>
                    5. 倒退跑10码返回起点。
                </p>
                <p class="warning"><strong>犯规判定：</strong> 侧滑步时双脚交叉交叠、未用指定手触碰锥桶底部、身体未始终保持面向前方。</p>
            </div>
        </details>

        <details>
            <summary>3. 专业灵敏性 5-10-5 测试 (Pro Agility) - 变向容量</summary>
            <div class="step-box">
                <p><strong>测试目的：</strong>评估高强度的侧向加速、急停减速与变向能力。</p>
                <p><strong>执行动作：</strong>
                    1. 跨立于中心线。<br>
                    2. 向右侧冲刺 5码，用右手触摸边线。<br>
                    3. 变向，向左侧冲刺 10码，用左手触摸边线。<br>
                    4. 再次变向，向右冲刺 5码，穿过中心起始线。<br>
                    5. 取最好成绩，精确到0.1秒。
                </p>
            </div>
        </details>

        <details>
            <summary>4. 单腿交叉跳远测试 (Crossover Hop for Distance) - 下肢对称功率</summary>
            <div class="step-box">
                <p><strong>测试目的：</strong>在连续跳跃中评估下肢爆发力、减速平衡及额状面侧向控制，计算下肢对称指数(LSI)。</p>
                <p><strong>测试设定：</strong>在地面上贴一条宽15厘米的直线。</p>
                <p><strong>执行动作：</strong>
                    1. 单腿站立于线后。<br>
                    2. 连续完成3次单腿跳，每次跳跃必须跨越地面的直线（形成交叉轨迹）。<br>
                    3. 第3次落地后，必须保持稳定的单腿站立姿势，不可出现额外平衡校正（否则无效）。<br>
                    4. 记录起跳线至脚跟的总距离。
                </p>
                <p><strong>数据判读 (LSI)：</strong> 肢体对称指数(LSI) = (较差侧成绩 ÷ 较好侧成绩) × 100%。在重返运动的标准中，LSI应至少达到 <span class="measurement">≥ 90%</span>。</p>
            </div>
        </details>

        <details>
            <summary>5. 下肢功能性测试 (LEFT) - 下肢无氧功率与耐力</summary>
            <div class="step-box">
                <p><strong>测试目的：</strong>高级计时无氧容量测试，评估下肢在多向复杂运动中的耐力与功率。</p>
                <p><strong>测试设定：</strong>长30英尺、宽10英尺的菱形场地。</p>
                <p><strong>执行动作：</strong>
                    包含16个连续步骤的高压测试：向前冲刺、倒退冲刺、侧滑步、交叉步、数字8跑、45度和90度急停变向等。<br>
                    （受试者需按照标准路径一气呵成跑完，测试期间观察心肺与代偿情况）
                </p>
                <p><strong>判读标准：</strong> 男性平均约为 <span class="measurement">100秒</span>（<90秒为优秀，>125秒不及格）；女性平均约为 <span class="measurement">135秒</span>（<120秒为优秀，>150秒不及格）。若测试失败，须重返有氧/无氧训练，不应参与极限专项训练。</p>
            </div>
        </details>
    </div>`,
    category: '常规功能性动作筛查',
  },
  {
    title: 'FMS 筛查后纠正路径与 4x4 动作矩阵',
    content: `<h1>🛠️ FMS 筛查后纠正路径与 4x4 动作矩阵</h1>
    
    <div class="card">
        <h2>第一阶段：问题定位与优先级算法 (Priority Algorithm)</h2>
        <p>FMS筛查的核心在于“不要盲目纠正”。当筛查发现多个问题时，必须严格按照以下基于分数的逻辑和神经发育层级来确定干预的最高优先级<span class="citation"></span>。</p>

        <h3>1. 基于分数的干预优先级 (Score-based Hierarchy)</h3>
        <p>请对照受试者的各项得分，按照以下1至8的绝对顺序进行排序，排在越前面的必须最先解决<span class="citation"></span>：</p>
        <table>
            <tr>
                <th>优先级</th>
                <th>FMS 得分情况</th>
                <th>临床操作指令 (SOP)</th>
            </tr>
            <tr>
                <td><strong>Top 1</strong></td>
                <td><span class="badge b-0">0分</span> 测试或排除测试中出现疼痛</td>
                <td><strong>医疗转介 (Medical Clearance)</strong>。立即停止训练，转入SFMA临床诊断<span class="citation"></span>。</td>
            </tr>
            <tr>
                <td><strong>Top 2</strong></td>
                <td><span class="badge b-1">1分</span> / <span class="badge b-3">3分</span> 的严重不对称</td>
                <td>优先解决差异最大的左右失衡，防止代偿性运动损伤<span class="citation"></span>。</td>
            </tr>
            <tr>
                <td><strong>Top 3</strong></td>
                <td><span class="badge b-1">1分</span> / <span class="badge b-2">2分</span> 的不对称</td>
                <td>次级不对称纠正<span class="citation"></span>。</td>
            </tr>
            <tr>
                <td><strong>Top 4</strong></td>
                <td>双侧测试（如ASLR, 弓箭步）均得 <span class="badge b-1">1分</span></td>
                <td>单侧动作模式的双边严重受限，优先恢复基础灵活性<span class="citation"></span>。</td>
            </tr>
            <tr>
                <td><strong>Top 5</strong></td>
                <td>双边测试（深蹲或俯卧撑）得 <span class="badge b-1">1分</span></td>
                <td>复合动作严重受限<span class="citation"></span>。</td>
            </tr>
            <tr>
                <td><strong>Top 6</strong></td>
                <td><span class="badge b-2">2分</span> / <span class="badge b-3">3分</span> 的轻度不对称</td>
                <td>在施加负重前消除微小的不对称<span class="citation"></span>。</td>
            </tr>
            <tr>
                <td><strong>Top 7</strong></td>
                <td>单侧测试均得 <span class="badge b-2">2分</span></td>
                <td>具有代偿，需通过4x4矩阵重训<span class="citation"></span>。</td>
            </tr>
            <tr>
                <td><strong>Top 8</strong></td>
                <td>深蹲或俯卧撑得 <span class="badge b-2">2分</span></td>
                <td>最后纠正的高阶复合动作代偿<span class="citation"></span>。</td>
            </tr>
        </table>

        <h3>2. 动作模式的“破局”层级 (Movement Pattern Continuum)</h3>
        <div class="logic-box">
            <strong>规则：</strong> 如果多个动作得分相同（例如ASLR和深蹲都是1分），必须遵循“灵活性优先于稳定性、基础模式优先于复合模式”的原则。按照以下顺序打破平局<span class="citation"></span>：<br><br>
            <strong>1. 主动直腿抬高 (ASLR) ➔ 2. 肩关节灵活性 (Shoulder) ➔ 3. 旋转稳定性 (Rotary Stab) ➔ 4. 直线弓箭步 (Lunge) ➔ 5. 跨栏架步 (Hurdle Step) ➔ 6. 躯干稳定性俯卧撑 (Push-Up) ➔ 7. 深蹲 (Deep Squat)</strong><span class="citation"></span>。
        </div>
    </div>

    <div class="card">
        <h2>第二阶段：禁忌动作与 3R 纠正处方选择</h2>
        
        <h3>1. 高危动作的禁忌 (General Considerations for 0's and 1's)</h3>
        <p>如果受试者在某项得分极低（0分或1分），必须在训练计划中严格移除以下专项负重动作，直到得分恢复<span class="citation"></span>：</p>
        <ul>
            <li><strong>深蹲 (DS) = 0/1分：</strong> 严禁跳跃训练 (Jumping)<span class="citation"></span>。</li>
            <li><strong>直线弓箭步 (IL) = 0/1分：</strong> 严禁跳跃训练、严禁在能量系统开发(ESD)中进行跑步<span class="citation"></span>。</li>
            <li><strong>肩关节灵活性 (SM) = 0/1分：</strong> 严禁过头负重推举、杠铃卧推、快速弹力带推/拉、上斜弯举<span class="citation"></span>。</li>
            <li><strong>直腿抬高 (ASLR) = 0/1分：</strong> 严禁跳跃、双腿髋主导拉力训练（如硬拉）、直腿行军/垫步、以及ESD中的跑步训练<span class="citation"></span>。</li>
        </ul>

        <h3>2. 3R 处方配置原则</h3>
        <p>根据选出的最优先问题得分，开具不同类型的干预动作（软组织放松 ST、灵活性 FL、纠正性重训 CORR）<span class="citation"></span>：</p>
        <table style="font-size: 0.95em;">
            <tr>
                <th>目标得分</th>
                <th>第一干预手段</th>
                <th>第二干预手段</th>
                <th>第三干预手段</th>
            </tr>
            <tr>
                <td><strong>得 0分 (痛)</strong></td>
                <td>ST (软组织/手法)</td>
                <td>ST (软组织/手法)</td>
                <td>ST (软组织/手法) <span class="citation"></span></td>
            </tr>
            <tr>
                <td><strong>得 1分 (受限)</strong></td>
                <td>ST (软组织释放)</td>
                <td>FL (灵活性拉伸)</td>
                <td>CORR (动作控制纠正) <span class="citation"></span></td>
            </tr>
            <tr>
                <td><strong>得 2分 (代偿)</strong></td>
                <td>FL (灵活性拉伸)</td>
                <td>CORR (纠正性重训)</td>
                <td>CORR (纠正性重训) <span class="citation"></span></td>
            </tr>
        </table>
    </div>

    <div class="card">
        <h2>第三阶段：4x4 纠正性训练矩阵 (The 4x4 Matrix)</h2>
        <p>在通过软组织(ST)和灵活性(FL)恢复了“硬件”关节活动度后，必须使用 <strong>4x4 矩阵</strong> 进行动作控制(CORR)的神经重塑。矩阵通过改变姿势（重心高低）和阻力（有无辅助）来循序渐进地植入新动作<span class="citation"></span>。</p>
        
        <div class="alert-box">
            <strong>4x4 矩阵进阶原则：</strong><br>
            姿势由低到高：1. 无负重(仰卧/俯卧) ➔ 2. 四足式 ➔ 3. 跪姿 ➔ 4. 站姿<span class="citation"></span>。<br>
            阻力由易到难：1. 无阻力且有模式辅助(PA) ➔ 2. 无阻力(自重) ➔ 3. 阻力且有辅助(PA) ➔ 4. 纯阻力<span class="citation"></span>。<br>
            *最常见进阶路径：1x1 ➔ 1x2 ➔ 2x1 ➔ 2x2 ➔ 3x1 ➔ 3x2 ➔ 4x1 ➔ 4x2 ➔ 1x3 ➔ 1x4... 直到 4x4<span class="citation"></span>。
        </div>

        <h3>像素级 4x4 动作植入全集 (以躯干/核心纠正为例)</h3>
        <table>
            <tr>
                <th>姿势难度 \\ 阻力难度</th>
                <th>1. 无阻力 + 有辅助 (PA)</th>
                <th>2. 无阻力 (纯自重)</th>
                <th>3. 增加阻力 + 有辅助</th>
                <th>4. 增加阻力</th>
            </tr>
            <tr>
                <td><strong>1. 无负重 (仰卧/俯卧)</strong><br><em>消除体位平衡要求，仅依靠地面反馈</em></td>
                <td><strong>1x1 练习：</strong><br>- 辅助模式脊椎卷起<br>- 辅助模式仰卧到俯卧的滚动<span class="citation"></span></td>
                <td><strong>1x2 练习：</strong><br>- 主动脊椎卷起<br>- 死虫式、主动翻滚<span class="citation"></span></td>
                <td><strong>1x3 练习：</strong><br>- 辅助模式下弹力带阻力卷起<span class="citation"></span></td>
                <td><strong>1x4 练习：</strong><br>- 独立抗阻卷起<br>- 独立抗阻斜卷<span class="citation"></span></td>
            </tr>
            <tr>
                <td><strong>2. 四足式 (抗重力)</strong><br><em>增加重力挑战，引入多点支撑</em></td>
                <td><strong>2x1 练习：</strong><br>- 辅助模式四足式向下延伸 (IR & ER)<span class="citation"></span></td>
                <td><strong>2x2 练习：</strong><br>- 四足式向下延伸 (鸟狗式)<span class="citation"></span></td>
                <td><strong>2x3 练习：</strong><br>- 辅助模式弹力带抗阻四足式延伸<span class="citation"></span></td>
                <td><strong>2x4 练习：</strong><br>- 独立弹力带抗阻四足式延伸<span class="citation"></span></td>
            </tr>
            <tr>
                <td><strong>3. 跪姿 (不对称支撑)</strong><br><em>缩小支撑基底，模拟单侧发力</em></td>
                <td><strong>3x1 练习：</strong><br>- 辅助模式半跪控制<br>- 辅助模式高跪砍树<span class="citation"></span></td>
                <td><strong>3x2 练习：</strong><br>- 半跪姿躯干主动旋转<br>- 半跪躯干卷起<span class="citation"></span></td>
                <td><strong>3x3 练习：</strong><br>- 辅助模式阻力半跪躯干卷起<span class="citation"></span></td>
                <td><strong>3x4 练习：</strong><br>- 负重半跪砍树 (Half-kneeling chop)<br>- 负重高跪砍树<span class="citation"></span></td>
            </tr>
            <tr>
                <td><strong>4. 站姿 (最高动态)</strong><br><em>极限平衡，整合至真实运动表现</em></td>
                <td><strong>4x1 练习：</strong><br>- 辅助模式脚后跟抬起和放下<br>- 辅助模式单腿触脚尖进程<span class="citation"></span></td>
                <td><strong>4x2 练习：</strong><br>- 逆向脚尖触摸 (Reverse toe touch)<br>- 自重箭步蹲<span class="citation"></span></td>
                <td><strong>4x3 练习：</strong><br>- 辅助模式站姿阻力躯干卷起<span class="citation"></span></td>
                <td><strong>4x4 练习：</strong><br>- 箭步站姿负重砍树 (Lunge stance chop)<br>- 极限站姿阻力爆发<span class="citation"></span></td>
            </tr>
        </table>
    </div>

    <div class="card">
        <h2>第四阶段：重返表现测试 (Return to Performance)</h2>
        <p>当受试者通过纠正性训练，最优先的问题得分达到 <strong>2分 或 3分且无不对称</strong> 后：</p>
        <ol>
            <li><strong>重新筛查 (Re-screening)：</strong> 每4-6周进行一次重新筛查，或者在优先纠正的动作模式中看到明显改善时复测。重新筛查可验证4x4矩阵设计的有效性<span class="citation"></span>。</li>
            <li><strong>安全放行 (Cleared to train and load)：</strong> 如果个人在某项运动模式中没有出现令人担忧的问题（无0分、无1分、无不对称），则他们将被获准在该模式下进行大重量训练和高负荷加载<span class="citation"></span>。</li>
            <li><strong>进阶高阶测试：</strong> 在获得完全绿灯后，必须过渡到更高级别的物理容量和运动表现测试（如 <strong>Y平衡测试 Y-Balance Test, 爆发力测试, 敏捷性测试</strong>），以挑战极限边缘的动态稳定性<span class="citation"></span>。</li>
        </ol>
    </div>`,
    category: '常规功能性动作筛查',
  },
  {
    title: 'SFMA 像素级临床操作标准指南 (SOP)',
    content: `<h1>🩺 SFMA 像素级临床操作与决策标准 (SOP)</h1>
    
    <div class="card">
        <h2>一、 核心评分规则与诊断术语</h2>
        <table>
            <tr>
                <th>评分代码</th>
                <th>定义</th>
                <th>交通灯指示</th>
                <th>临床操作指令 (SOP)</th>
            </tr>
            <tr>
                <td><span class="badge badge-fn">FN</span> 功能良好且无痛</td>
                <td>达到像素级动作标准，无代偿，无疼痛</td>
                <td>🛑 <strong>红灯 (Stop)</strong></td>
                <td>停止突破。此处硬件/软件正常，转至其他受限区域。</td>
            </tr>
            <tr>
                <td><span class="badge badge-fp">FP</span> 功能良好但有痛</td>
                <td>达到动作标准，但出现症状</td>
                <td>⚠️ <strong>黄灯 (Caution)</strong></td>
                <td>谨慎突破。记录为疼痛刺激标记，优先进行医疗/理疗干预。</td>
            </tr>
            <tr>
                <td><span class="badge badge-dp">DP</span> 功能障碍且有痛</td>
                <td>未达标/受限，且出现症状</td>
                <td>⚠️ <strong>黄灯 (Caution)</strong></td>
                <td>最后测试。优先处理化学性疼痛和炎症，切勿强行训练。</td>
            </tr>
            <tr>
                <td><span class="badge badge-dn">DN</span> 功能障碍且无痛</td>
                <td>未达标/受限/代偿，但无疼痛</td>
                <td>🟢 <strong>绿灯 (Go)</strong></td>
                <td><strong>核心发现！强制一路突破到底。</strong>使用分解测试寻找根源。</td>
            </tr>
        </table>
        
        <div class="diagnostic-result">
            <strong>SFMA 最终功能诊断分类：</strong><br>
            1. <strong>TED (组织延展性功能障碍)：</strong> 肌肉紧缩、筋膜紧张、神经张力异常、疤痕纤维化等软组织受限。<br>
            2. <strong>JMD (关节灵活性功能障碍)：</strong> 关节囊紧绷、关节磨损、骨关节炎、粘连性关节囊炎等关节本身受限。<br>
            3. <strong>SMCD (稳定性和/或动作控制功能障碍)：</strong> 关节与软组织(硬件)正常，但神经肌肉控制(软件)失调、核心不稳或存在高阈值代偿策略。
        </div>
    </div>

    <div class="card">
        <h2>二、 10大顶级测试与像素级分解测试 (Breakouts)</h2>
        <p class="warning">SOP前提：所有测试均在不穿鞋、不热身的情况下进行。仅对评分为 <span class="badge badge-dn">DN (功能障碍且无痛)</span> 的项目执行以下下拉菜单中的分解流程。</p>

        <!-- 1. 颈椎屈曲 -->
        <details>
            <summary>1. 颈椎屈曲 (Cervical Flexion)</summary>
            <p><strong>像素级标准：</strong> 双脚并拢站立，闭上嘴巴，下巴触碰胸骨。无过度用力或代偿。</p>
            <div class="breakout-step">
                <p><strong>DN 分解流程 (消除重力影响)：</strong></p>
                <ol>
                    <li><strong>仰卧主动颈椎屈曲：</strong> 患者仰卧，主动将下巴触碰胸骨。
                        <ul>
                            <li>若达标 (FN)：诊断为颈椎/躯干的 <span class="diagnostic-result">SMCD</span>（负重下的稳定性问题）。</li>
                            <li>若受限 (DN)：继续下一步。</li>
                        </ul>
                    </li>
                    <li><strong>仰卧被动颈椎屈曲：</strong> 医生被动屈曲患者颈部。
                        <ul>
                            <li>若被动达标 (FN)：诊断为主动的 <span class="diagnostic-result">SMCD</span>（动作控制障碍）。</li>
                            <li>若被动受限 (DN)：继续隔离枕寰关节(OA)。</li>
                        </ul>
                    </li>
                    <li><strong>主动/被动 OA 屈曲：</strong> 仅测试上颈椎的点头动作，目标角度 <span class="measurement">20°</span>。
                        <ul>
                            <li>若受限：诊断为 <strong>OA关节 JMD</strong> 或 <strong>上颈椎 TED</strong>。</li>
                        </ul>
                    </li>
                </ol>
            </div>
        </details>

        <!-- 2. 颈椎伸展 -->
        <details>
            <summary>2. 颈椎伸展 (Cervical Extension)</summary>
            <p><strong>像素级标准：</strong> 头部后仰，面部必须与天花板平行 <span class="measurement">相差 < 10°</span>，且脊柱曲线均匀，无肩胛骨代偿上抬。</p>
            <div class="breakout-step">
                <p><strong>DN 分解流程：</strong></p>
                <ol>
                    <li><strong>仰卧主动颈椎伸展：</strong> 患者头部悬空于床外，主动后仰至面部与墙面垂直。
                        <ul>
                            <li>若达标 (FN)：诊断为颈部/姿势性 <span class="diagnostic-result">SMCD</span>。</li>
                        </ul>
                    </li>
                    <li><strong>仰卧被动颈椎伸展：</strong> 医生托住头部被动后仰。
                        <ul>
                            <li>若被动受限 (DN)：诊断为 <strong>颈椎伸展 JMD</strong> 或 <strong>颈前侧 TED</strong>。</li>
                        </ul>
                    </li>
                </ol>
            </div>
        </details>

        <!-- 3. 颈椎旋转 -->
        <details>
            <summary>3. 颈椎旋转 (Cervical Rotation)</summary>
            <p><strong>像素级标准：</strong> 仅转动头部，下巴/鼻子须与锁骨中线对齐。双侧要求对称。</p>
            <div class="breakout-step">
                <p><strong>DN 分解流程：</strong></p>
                <ol>
                    <li><strong>仰卧主动旋转：</strong> 目标角度 <span class="measurement">80°</span>。</li>
                    <li><strong>仰卧被动旋转：</strong> 若主动受限，进行被动测试。</li>
                    <li><strong>C1-C2 颈椎屈曲旋转测试：</strong> 将颈椎完全屈曲（锁定下颈椎）后被动旋转，目标角度 <span class="measurement">40°</span>。
                        <ul>
                            <li>若受限：诊断为 <strong>寰枢关节(C1-C2) JMD/TED</strong>。</li>
                            <li>若达标：则问题出在 <strong>下颈椎 JMD/TED</strong>。</li>
                        </ul>
                    </li>
                </ol>
            </div>
        </details>

        <!-- 4. 上肢模式1 -->
        <details>
            <summary>4. 上肢模式 1 (内旋/伸展 - 摸对侧肩胛下角)</summary>
            <p><strong>像素级标准：</strong> 手背从下往上摸对侧肩胛骨下角，无肩胛骨翼状突出，无躯干侧弯代偿。</p>
            <div class="breakout-step">
                <p><strong>DN 分解流程 (拆分为单关节单平面)：</strong></p>
                <ol>
                    <li><strong>俯卧主动上肢模式 1：</strong> 消除脊柱稳定需求。若 FN，则为姿势性 <span class="diagnostic-result">SMCD</span>。</li>
                    <li><strong>被动俯卧模式 1：</strong> 若主动 DN，则被动测试。若FN，进入仰卧逆向模式测试。</li>
                    <li><strong>俯卧肩关节 90/90 内旋 (IR)：</strong> 主动/被动测试。目标角度 <span class="measurement">60°</span>（或内外旋总弧度 <span class="measurement">150°</span>）。若受限为 IR JMD/TED。</li>
                    <li><strong>俯卧肩关节伸展：</strong> 目标角度 <span class="measurement">50°</span>。若受限为 Ext JMD/TED。</li>
                    <li><strong>俯卧肘关节屈曲：</strong> 拇指摸肩。鉴别肘部 JMD/TED。</li>
                    <li><strong>腰椎锁定主动/被动 胸椎伸展/旋转：</strong> 目标 <span class="measurement">50°</span>。若受限，肩部代偿的根源为 <strong>胸椎 JMD/TED</strong>。</li>
                </ol>
            </div>
        </details>

        <!-- 5. 上肢模式2 -->
        <details>
            <summary>5. 上肢模式 2 (外旋/屈曲 - 摸对侧肩胛冈)</summary>
            <p><strong>像素级标准：</strong> 手从上往下摸对侧肩胛骨冈（上部），无头前引或脊柱伸展代偿。</p>
            <div class="breakout-step">
                <p><strong>DN 分解流程：</strong></p>
                <ol>
                    <li><strong>俯卧主动/被动上肢模式 2：</strong> 同模式1逻辑。</li>
                    <li><strong>俯卧肩关节 90/90 外旋 (ER)：</strong> 目标角度 <span class="measurement">90°</span>。若受限为 ER JMD/TED。</li>
                    <li><strong>俯卧肩关节屈曲/外展：</strong> 目标角度 <span class="measurement">170°</span>。若受限为 Flex/Abd JMD/TED。</li>
                    <li><strong>俯卧肘关节屈曲：</strong> 测试肘部受限。</li>
                    <li><strong>腰椎锁定胸椎伸展/旋转：</strong> 确认区域相互依存，排查胸椎根源。</li>
                </ol>
            </div>
        </details>

        <!-- 6. 多部位屈曲 -->
        <details>
            <summary>6. 多部位屈曲 (Multi-Segmental Flexion)</summary>
            <p><strong>像素级标准：</strong> 弯腰触碰脚趾。骶骨角 <span class="measurement">> 70°</span>，脊柱后凸均匀，重心必须向后转移。</p>
            <div class="breakout-step">
                <p><strong>DN 分解流程 (区分后侧链、髋关节与脊柱)：</strong></p>
                <ol>
                    <li><strong>单腿站立前屈：</strong> 检查左右不对称性。</li>
                    <li><strong>长坐姿触脚趾：</strong> 去除下肢承重。若 FN，则为负重姿势下的 <span class="diagnostic-result">核心/髋 SMCD</span>。</li>
                    <li><strong>主动直腿抬高 (ASLR) & 被动直腿抬高 (PSLR)：</strong> ASLR目标 <span class="measurement">70°</span>，PSLR目标 <span class="measurement">80°</span>。若被动受限，为 <strong>下肢后侧链 TED</strong> 或 <strong>髋关节 JMD</strong>。</li>
                    <li><strong>俯卧摇摆 (Prone Rocking)：</strong> 臀部坐向脚后跟，评估无负重下脊柱和髋的屈曲。若受限为 <strong>髋 JMD 或 脊柱 JMD/TED</strong>。</li>
                    <li><strong>仰卧抱大腿/小腿触胸：</strong> 进一步隔离膝关节、髋关节和脊柱。</li>
                    <li><strong>翻滚测试 (Rolling)：</strong> 仰卧到俯卧。若无法完成，确认为基础神经发育层面的核心 <span class="diagnostic-result">SMCD</span>。</li>
                </ol>
            </div>
        </details>

        <!-- 7. 多部位伸展 -->
        <details>
            <summary>7. 多部位伸展 (Multi-Segmental Extension)</summary>
            <p><strong>像素级标准：</strong> 双臂举过头顶后仰。ASIS必须越过脚趾，肩胛冈必须越过脚后跟，脊柱曲线均匀，肩屈曲维持 <span class="measurement">170°</span>。</p>
            <div class="breakout-step">
                <p><strong>DN 分解流程 (上半身与下半身双线排查)：</strong></p>
                <ol>
                    <li><strong>无上肢后仰 & 单腿后仰：</strong> 剥离肩部影响和双侧代偿。</li>
                    <li><strong>俯卧撑起 (Prone Press Up)：</strong> ASIS 离开床面不超过 <span class="measurement">2英寸</span>。若 FN，排除了脊柱硬件问题，诊断为 <strong>前侧核心 TED 或 SMCD</strong>。</li>
                    <li><strong>上半身 - 腰椎锁定伸展/旋转：</strong> 目标 <span class="measurement">50°</span>。排查 <strong>胸椎 JMD/TED</strong>。</li>
                    <li><strong>下半身 - 俯卧主动/被动髋伸展：</strong> 目标 <span class="measurement">10°</span>。</li>
                    <li><strong>FABER 测试 & 托马斯测试 (Modified Thomas)：</strong> 区分髋关节 JMD (FABER受限) 与 股直肌/髂腰肌/阔筋膜张肌 TED (Thomas受限)。</li>
                </ol>
            </div>
        </details>

        <!-- 8. 多部位旋转 -->
        <details>
            <summary>8. 多部位旋转 (Multi-Segmental Rotation)</summary>
            <p><strong>像素级标准：</strong> 双脚不动，身体旋转。骨盆与肩膀均需旋转 <span class="measurement">> 50°</span>，无躯干侧屈偏移。</p>
            <div class="breakout-step">
                <p><strong>DN 分解流程 (自下而上拆解)：</strong></p>
                <ol>
                    <li><strong>坐姿躯干旋转：</strong> 目标 <span class="measurement">50°</span>。锁定骨盆，单独检查脊柱。</li>
                    <li><strong>腰椎锁定伸展/旋转：</strong> 目标 <span class="measurement">50°</span>。隔离胸椎。</li>
                    <li><strong>髋关节内外旋：</strong> 坐姿与俯卧位测试。目标外旋 <span class="measurement">40°</span>，内旋 <span class="measurement">30°</span>。区分髋关节 JMD/TED。</li>
                    <li><strong>胫骨内/外旋：</strong> 坐姿下测试，目标 <span class="measurement">20°</span>。排查最容易被忽视的膝下旋转受限。</li>
                </ol>
            </div>
        </details>

        <!-- 9. 单腿站立 -->
        <details>
            <summary>9. 单腿站立 (Single Leg Stance)</summary>
            <p><strong>像素级标准：</strong> 支撑腿无高度流失，髋膝呈90°，睁眼 <span class="measurement">≥ 10秒</span>，闭眼 <span class="measurement">≥ 10秒</span>。</p>
            <div class="breakout-step">
                <p><strong>DN 分解流程 (前庭、核心与踝关节排查)：</strong></p>
                <ol>
                    <li><strong>前庭测试 (CTSIB)：</strong> 稳定与不稳平面上的静态/动态头部测试。若受限，转介专科医生。</li>
                    <li><strong>半跪姿窄基底测试：</strong> 若闭眼受限，说明存在负重下的下肢/核心 <span class="diagnostic-result">SMCD</span>。</li>
                    <li><strong>翻滚测试 & 四足式对角线伸展：</strong> 退阶到无负重/多点支撑状态，检查基础运动控制。</li>
                    <li><strong>脚跟走 & 脚尖走：</strong> 动态测试踝关节。</li>
                    <li><strong>俯卧被动 踝背屈/跖屈：</strong> 背屈目标 <span class="measurement">20-30°</span>，跖屈目标 <span class="measurement">30-40°</span>。排查踝关节硬件 JMD/TED。</li>
                </ol>
            </div>
        </details>

        <!-- 10. 高举深蹲 -->
        <details>
            <summary>10. 高举深蹲 (Overhead Deep Squat)</summary>
            <p><strong>像素级标准：</strong> 脚跟不离地，大腿降至低于水平，胫骨与躯干平行，双臂不掉落。</p>
            <div class="breakout-step">
                <p><strong>DN 分解流程 (从下到上寻找受限点)：</strong></p>
                <ol>
                    <li><strong>双手抱颈深蹲：</strong> 去除对肩部/胸椎的极限要求。若能完成，问题出在上半身(肩/胸椎)。</li>
                    <li><strong>辅助深蹲 (抓手下蹲)：</strong> 去除对脚踝背屈极限及核心平衡的要求。若能完成，记录为核心 <span class="diagnostic-result">SMCD</span>。</li>
                    <li><strong>半跪姿踝关节背屈测试：</strong> 膝盖必须超出脚趾 <span class="measurement">4-5英寸 (约10-12cm)</span>。若受限，为 <strong>踝关节 JMD 或 腓肠肌/比目鱼肌 TED</strong>。</li>
                    <li><strong>仰卧抱小腿/大腿触胸：</strong> 若抱小腿受限但抱大腿正常，证明髋正常，受限在于 <strong>膝关节屈曲 JMD 或 股四头肌 TED</strong>。</li>
                </ol>
            </div>
        </details>
    </div>

    <div class="card">
        <h2>三、 纠正性运动处方制定 (3R 原则与 4x4 矩阵)</h2>
        <p>评估出根源后，严格按照 <strong>3R顺序</strong> 进行干预：</p>
        <ol>
            <li><strong>Reset (重置)：</strong> 优先针对 JMD/TED 使用手法松解、干针、关节松动术恢复活动度。<em>灵活性胜过稳定性。</em></li>
            <li><strong>Reinforce (强化)：</strong> 使用肌内效贴布或支具，维持重置后新获得的活动度。</li>
            <li><strong>Retrain (重训)：</strong> 针对 SMCD（动作控制障碍），使用 <strong>4x4 矩阵</strong> 重新建立神经肌肉连接。</li>
        </ol>
        
        <table>
            <tr>
                <th>姿势进阶 \\ 阻力进阶</th>
                <th>1. 无阻力+辅助 (PA)</th>
                <th>2. 无阻力 (自重)</th>
                <th>3. 有阻力+辅助 (PA)</th>
                <th>4. 有阻力</th>
            </tr>
            <tr>
                <td><strong>1. 无负重 (仰卧/俯卧)</strong></td>
                <td>医生引导下的躯干翻滚</td>
                <td>主动翻滚、死虫式</td>
                <td>弹力带辅助下的抗阻卷起</td>
                <td>独立抗阻核心训练</td>
            </tr>
            <tr>
                <td><strong>2. 四足位 (抗重力)</strong></td>
                <td>辅助下的四足对角伸展</td>
                <td>鸟狗式 (Bird-Dog)</td>
                <td>引导下的抗阻鸟狗式</td>
                <td>弹力带抗阻鸟狗式</td>
            </tr>
            <tr>
                <td><strong>3. 跪姿 (单侧窄基底)</strong></td>
                <td>辅助下的半跪姿控制</td>
                <td>半跪姿躯干主动旋转</td>
                <td>辅助下的半跪姿砍树动作</td>
                <td>滑轮/弹力带半跪姿抗阻砍树</td>
            </tr>
            <tr>
                <td><strong>4. 站姿 (最高动态要求)</strong></td>
                <td>辅助单腿触脚尖</td>
                <td>自重箭步蹲、单腿硬拉</td>
                <td>辅助站姿抗阻转体</td>
                <td>站姿负重抗阻爆发训练</td>
            </tr>
        </table>
    </div>`,
    category: '常规功能性动作筛查',
  },
  {
    title: 'Y-Balance Test (YBT) 下肢动态平衡测试：像素级SOP',
    content: `<h1>📐 Y-Balance Test (YBT) 下肢动态平衡测试：像素级SOP</h1>
    
    <div class="card">
        <h2>一、 测试准备与基线数据测量</h2>
        <p>YBT-LQ（下肢Y平衡测试）是一项在极限稳定状态下测试动态神经肌肉控制、力量、灵活性和不对称性的核心工具。在正式测试前，必须获取受试者的精确肢体长度，以用于后续数据的标准化计算。</p>
        
        <div class="breakout-step">
            <p><strong>1. 环境与着装：</strong> 受试者必须脱去鞋袜（赤脚），穿着轻便运动服。测试需在平坦、防滑的地面上进行。</p>
            <p><strong>2. 肢体长度测量 (Limb Length)：</strong> 
                <ul>
                    <li>受试者仰卧。</li>
                    <li>使用软尺精确测量从 <strong>髂前上棘 (ASIS)</strong> 到 <strong>内踝最突点 (Medial Malleolus)</strong> 的距离。</li>
                    <li>记录右腿（或双腿）的数据用于标准化计算，记录精度至 <span class="measurement">0.5 cm</span>。</li>
                </ul>
            </p>
            <p><strong>3. 热身与练习：</strong> 在每个测试方向上，受试者被允许进行 <strong>4次练习 (Practice Trials)</strong>，以熟悉推块阻力、掌握动作并消除学习效应。</p>
        </div>
    </div>

    <div class="card">
        <h2>二、 像素级测试动作规范与犯规判定</h2>
        <p class="warning">YBT测试的执行极为严格。受试者必须在单腿支撑的状态下，将推块推至极限并受控地回到起始位置。出现以下任何一种情况，该次成绩作废 (Void Trial)。</p>
        
        <table>
            <tr>
                <th>测试维度</th>
                <th>像素级动作标准 (合格)</th>
                <th>犯规动作 (作废/Void)</th>
            </tr>
            <tr>
                <td><strong>起始姿势</strong></td>
                <td>单脚赤足站在中心踏板上，脚趾刚好在红色起始线后方。双手必须牢牢叉腰。</td>
                <td>脚趾越过红线；双手离开髋部（失去上肢的约束）。</td>
            </tr>
            <tr>
                <td><strong>推块动作</strong></td>
                <td>用悬空脚的脚趾或足部边缘轻轻推动红色指示块。指示块需停在受试者推出的最远端。</td>
                <td>脚踩在指示块上方借力休息；用力踢出(Kicking)指示块使之滑行。</td>
            </tr>
            <tr>
                <td><strong>支撑腿控制</strong></td>
                <td>支撑腿需保持全身平衡，依靠核心和下肢三关节（髋、膝、踝）协同发力。</td>
                <td>支撑脚的脚后跟抬离中心踏板 (Heel lifts off the platform)。</td>
            </tr>
            <tr>
                <td><strong>身体回位</strong></td>
                <td>悬空腿推完指示块后，必须在完全受控的情况下回到起始的单腿站立姿势。</td>
                <td>悬空脚在移动中或回位时触碰地面 (Touching the floor) 或身体失去平衡摔倒。</td>
            </tr>
        </table>
    </div>

    <div class="card">
        <h2>三、 标准化测试顺序 (SOP)</h2>
        <p>为了保证测试信度与一致性，受试者必须严格按照以下顺序，在3个方向上（前方、内后方、外后方）完成正式测试。每个方向完成 <strong>3次成功测试 (Successful Reaches)</strong>。</p>
        
        <details>
            <summary>第1步：前方伸展 (Anterior Reach)</summary>
            <div class="breakout-step">
                <p>1. 右腿支撑，左脚向前推块（记录3次有效成绩）。<br>
                2. 左腿支撑，右脚向前推块（记录3次有效成绩）。</p>
                <p><em>专项意义：高度考验支撑腿的脚踝背屈能力、膝关节控制以及股四头肌离心力量。前方伸展的不对称性对下肢损伤预测极具价值。</em></p>
            </div>
        </details>

        <details>
            <summary>第2步：内后方伸展 (Posteromedial Reach)</summary>
            <div class="breakout-step">
                <p>3. 右腿支撑，左脚向右后方（内后方）推块（记录3次有效成绩）。<br>
                4. 左腿支撑，右脚向左后方（内后方）推块（记录3次有效成绩）。</p>
                <p><em>专项意义：挑战臀大肌、臀中肌的稳定控制力及骨盆抗旋转能力。</em></p>
            </div>
        </details>

        <details>
            <summary>第3步：外后方伸展 (Posterolateral Reach)</summary>
            <div class="breakout-step">
                <p>5. 右腿支撑，左脚向左后方（外后方）推块（记录3次有效成绩）。<br>
                6. 左腿支撑，右脚向右后方（外后方）推块（记录3次有效成绩）。</p>
                <p><em>专项意义：在髋关节极度屈曲和内旋的状态下，测试髂胫束张力及后外侧链的极限稳定性。</em></p>
            </div>
        </details>
        
        <p><strong>数据读取：</strong> 成绩读取为靠近受试者一侧的指示块边缘的刻度，精确到 <span class="measurement">0.5 cm</span>。取3次有效成绩中的 <strong>最大值 (Maximal Reach)</strong> 用于最终计算。</p>
    </div>

    <div class="card">
        <h2>四、 数据计算与风险红绿灯系统</h2>
        <p>绝对距离无法在不同身高的受试者之间进行横向比较。必须使用第一阶段测量的肢体长度（Limb Length）将成绩 <strong>标准化 (Normalized)</strong>，计算出综合得分 (Composite Score)。</p>
        
        <div class="formula-box">
            <strong>综合得分公式：</strong><br>
            Composite Score (%) = [ (前方最大值 + 内后方最大值 + 外后方最大值) / (3 × 肢体长度) ] × 100
        </div>

        <h3>🚦 YBT 损伤风险预测红绿灯预警模型</h3>
        <table>
            <tr>
                <th>风险等级</th>
                <th>指标与阈值</th>
                <th>临床与运动表现意义</th>
            </tr>
            <tr>
                <td><span class="badge badge-red">红灯：高风险</span></td>
                <td>
                    <strong>1. 前方伸展不对称性 ≥ 4 cm</strong><br>
                    <strong>2. 综合得分 < 89%</strong>
                </td>
                <td>
                    <strong>高危预警！</strong> 前方不对称性 ≥ 4 cm 的运动员，下肢非接触性损伤几率增加 <strong>2.2倍</strong> 以上。<br>
                    综合得分低于 89%（或不同运动项目特异性阈值如94%）的运动员，其赛季中受伤的可能性显著升高。应视为纠正性训练的最高优先级。
                </td>
            </tr>
            <tr>
                <td><span class="badge badge-yellow">黄灯：中等风险</span></td>
                <td><strong>综合得分 89% - 94%</strong></td>
                <td>
                    处于灰色地带。对于高水平竞技体育（如篮球、足球等），此得分仍可能属于风险区间。需要将神经肌肉控制训练加入日常热身中，并监控疲劳带来的微小不对称。
                </td>
            </tr>
            <tr>
                <td><span class="badge badge-green">绿灯：低风险</span></td>
                <td><strong>综合得分 > 94% 且 各方向对称</strong></td>
                <td>
                    受试者具备了出色的极限动态平衡与功能对称性。已获得功能性放行许可 (Cleared)，可安全进阶到高强度的爆发力、敏捷与专项运动表现训练。
                </td>
            </tr>
        </table>
    </div>`,
    category: '常规功能性动作筛查',
  },
  {
    title: 'Y-Balance Test Upper Quarter (YBT-UQ) 上肢动态平衡测试：像素级SOP',
    content: `<span style="display:none;">[1][2][3][4][5]</span>
    <h1>🦾 Y-Balance Test Upper Quarter (YBT-UQ) 上肢动态平衡测试：像素级SOP</h1>
    
    <div class="card">
        <h2>一、 测试核心目的与基线数据测量 (Limb Length)</h2>
        <p>YBT-UQ 专为头顶作业运动员（如棒球、网球、游泳）和战术/特种职业人群设计。它在俯卧撑的极限稳定状态下，综合评估肩胛骨稳定性、盂肱关节灵活性、胸椎旋转能力以及核心稳定性。</p>
        
        <div class="breakout-step">
            <p><strong>1. 测试环境与着装：</strong> 受试者需脱去鞋袜（赤脚），穿着轻便运动服。</p>
            <p><strong>2. 上肢肢体长度测量 (Upper Quarter Limb Length)：</strong> 这是标准化计算得分的绝对前提。
                <ul>
                    <li>受试者背对测试者站立，双脚并拢。</li>
                    <li>要求受试者将 <strong>右臂</strong> 向侧面水平伸展，掌心与面部朝向一致（肩外展90度）。</li>
                    <li>定位受试者的 <strong>第七颈椎棘突 (C7)</strong>（颈部底部最突出的骨性标志；若难寻找，可让受试者做颈部屈伸，C7棘突会始终保持突出）。</li>
                    <li>使用软尺，测量从 <strong>C7棘突</strong> 到 <strong>右手第三指（中指）最远端指尖</strong> 的距离。</li>
                    <li>仅需测量右臂，记录精度至 <span class="measurement">0.5 cm</span>。</li>
                </ul>
            </p>
            <p><strong>3. 练习次数 (Practice Trials)：</strong> 受试者有权在正式测试前，每只手臂向3个方向进行 <strong>2次练习</strong>，以熟悉动作和推块阻力。</p>
        </div>
    </div>

    <div class="card">
        <h2>二、 像素级测试动作规范与犯规判定</h2>
        <p class="warning">YBT-UQ 是一项极具挑战的闭链测试。受试者必须在单臂支撑的俯卧撑状态下，将推块推至极限。出现以下任何一种代偿或犯规，该次成绩直接作废 (Void Trial)。</p>
        
        <table>
            <tr>
                <th>测试维度</th>
                <th>像素级动作标准 (合格)</th>
                <th>犯规动作 (作废/Void)</th>
            </tr>
            <tr>
                <td><strong>起始姿势</strong></td>
                <td>标准的俯卧撑姿势。双脚打开与肩同宽，双手正对肩膀下方。支撑手的大拇指对准红色起始线。</td>
                <td>双脚间距过大；躯干未保持平直（塌腰或过度撅臀）。</td>
            </tr>
            <tr>
                <td><strong>推块动作</strong></td>
                <td>用非支撑手轻轻推动红色指示块，手必须停留在红色目标区域内进行推动。</td>
                <td>用力将指示块抛出、推离 (Shoving/Kicking)；手离开红色目标区域。</td>
            </tr>
            <tr>
                <td><strong>身体控制</strong></td>
                <td>允许胸椎旋转和肩胛骨的运动，但必须保持整体的俯卧撑平衡构架。</td>
                <td>支撑手发生移动；双脚发生移动或抬离地面。</td>
            </tr>
            <tr>
                <td><strong>动作连贯性</strong></td>
                <td>推块后必须受控地回到起始俯卧撑位置，并且三个方向必须 <strong>连续进行</strong>。</td>
                <td>在推动过程中或回位时，非支撑手撑地休息；失去平衡摔倒。</td>
            </tr>
        </table>
    </div>

    <div class="card">
        <h2>三、 标准化测试顺序 (Testing Sequence)</h2>
        <p><strong>注意：与下肢YBT不同，上肢YBT的三个方向必须以连贯的顺序进行，期间不能停顿休息！</strong> 完成一套连续的三个方向后，才算作1次完整测试。每只手臂需完成 <strong>3次有效测试</strong>。</p>
        
        <details>
            <summary>第1步：右侧上肢测试 (Right Upper Extremity)</summary>
            <div class="breakout-step">
                <p>受试者以右臂为 <strong>支撑臂 (Stance Arm)</strong>，左手依次向以下三个方向推块（动作需连贯，推完一个方向立即回中并推下一个）：</p>
                <p><strong>1. 内侧伸展 (Medial Reach)：</strong> 左手向右臂的内侧（身体下方）尽可能推远。<br>
                <strong>2. 下外侧伸展 (Inferolateral Reach)：</strong> 左手向身体对角线的右下后方推远。<br>
                <strong>3. 上外侧伸展 (Superolateral Reach)：</strong> 左手向身体对角线的右上前方推远。</p>
                <p><em>专项意义：连续挑战肩带的回缩/前伸、胸椎旋转极限及核心的抗旋能力。完成3次成功的循环。</em></p>
            </div>
        </details>

        <details>
            <summary>第2步：左侧上肢测试 (Left Upper Extremity)</summary>
            <div class="breakout-step">
                <p>受试者换以左臂为 <strong>支撑臂 (Stance Arm)</strong>，右手依次连贯推向三个方向：</p>
                <p><strong>1. 内侧伸展 (Medial Reach)</strong><br>
                <strong>2. 下外侧伸展 (Inferolateral Reach)</strong><br>
                <strong>3. 上外侧伸展 (Superolateral Reach)</strong></p>
                <p><em>专项意义：对比左右肩胛带的动态稳定不对称性。完成3次成功的循环。</em></p>
            </div>
        </details>
        
        <p><strong>数据读取：</strong> 成绩读取为指示块最靠近受试者一侧的红色边缘刻度，精确到 <span class="measurement">0.5 cm</span>。取3次有效循环中，各个方向的 <strong>最大值 (Maximal Reach)</strong> 用于计算。</p>
    </div>

    <div class="card">
        <h2>四、 数据计算与临床风险评估</h2>
        <p>必须使用第一步测量的上肢肢体长度（Limb Length, C7至中指尖）对成绩进行标准化。</p>
        
        <div class="formula-box">
            <strong>上肢综合得分公式 (Composite Score)：</strong><br>
            Composite Score (%) = [ (内侧最大值 + 下外侧最大值 + 上外侧最大值) / (3 × 上肢肢体长度) ] × 100
        </div>

        <h3>🚦 YBT-UQ 临床干预与不对称性预警 (MDC 指南)</h3>
        <p>与下肢不同，上肢YBT的绝对红线因运动专项差异较大，但临床上严格依赖 <strong>最小可觉察变化 (Minimal Detectable Change, MDC)</strong> 来判定受试者的不对称是否具有病理或表现受限意义：</p>
        <table>
            <tr>
                <th>测试维度</th>
                <th>异常/风险阈值 (MDC & Asymmetry)</th>
                <th>临床与运动表现意义</th>
            </tr>
            <tr>
                <td><span class="badge badge-red">综合得分不对称</span></td>
                <td><strong>左右综合得分差异 > 6.5% - 6.9%</strong></td>
                <td>
                    <strong>高危预警：</strong> 超出了测量误差范围，表明两侧肩带/核心协同存在真实的病理性功能不对称。单侧头顶发力（投掷、扣球）受伤风险急剧增加。
                </td>
            </tr>
            <tr>
                <td><span class="badge badge-yellow">内侧伸展不对称</span></td>
                <td><strong>左右差异 > 8.1 cm</strong></td>
                <td>
                    提示单侧胸小肌、前锯肌功能受限或胸椎旋转存在结构性卡压。需回到 SFMA 上肢模式进行降维排查。
                </td>
            </tr>
            <tr>
                <td><span class="badge badge-yellow">上/下外侧不对称</span></td>
                <td><strong>上外侧差异 > 6.4 cm<br>下外侧差异 > 6.1 cm</strong></td>
                <td>
                    提示支撑侧的肩袖肌群动态稳定不足（离心控制差），或后表链/侧表链的筋膜张力不平衡。
                </td>
            </tr>
            <tr>
                <td><span class="badge badge-green">达标与出院放行</span></td>
                <td><strong>各方向对称且无痛</strong></td>
                <td>
                    <strong>绿灯：</strong> 运动员的上肢闭链控制能力极佳，可安全放行 (Cleared to Play)，进行高强度的专项上肢爆发力及大重量过头举训练。
                </td>
            </tr>
        </table>
    </div>`,
    category: '常规功能性动作筛查',
  },
  {
    title: 'PAR-Q 体力活动准备问卷',
    content: `<div class="container">
    <h1>📝 PAR-Q 体力活动准备问卷 (2026 修订版)</h1>
    
    <div class="intro-text">
        规律的体力活动充满乐趣且对健康有益，对绝大多数人而言，增加体力活动是极其安全的。然而，少部分人群在增加运动量前应当咨询医生的意见。本问卷旨在为您提供<strong>运动前的初步安全筛查</strong>，帮助甄别在运动前需要医疗转介的人群。
    </div>

    <div class="instruction-box">
        <strong>填写说明：</strong> 如果您计划显著增加您的运动量，请仔细阅读以下 7 个问题，并根据您<strong>过去一个月的真实情况</strong>诚实作答。
    </div>

    <div class="client-info">
        <div class="input-group">
            <label>客户姓名 / Name</label>
            <input type="text" placeholder="请输入姓名">
        </div>
        <div class="input-group">
            <label>联系电话 / Phone</label>
            <input type="text" placeholder="请输入电话号码">
        </div>
        <div class="input-group">
            <label>出生日期 / DOB</label>
            <input type="date">
        </div>
    </div>

    <table>
        <tr>
            <th width="8%">序号</th>
            <th width="72%">筛查问题内容 (请勾选 是 或 否)</th>
            <th width="10%">是 (Yes)</th>
            <th width="10%">否 (No)</th>
        </tr>
        <tr>
            <td class="text-center"><strong>1</strong></td>
            <td>您的医生是否曾经告诉过您，您患有<strong>心脏疾病</strong>，并且只能参加医生推荐的体力活动？</td>
            <td class="radio-cell"><input type="radio" name="q1" value="yes"></td>
            <td class="radio-cell"><input type="radio" name="q1" value="no"></td>
        </tr>
        <tr>
            <td class="text-center"><strong>2</strong></td>
            <td>当您进行体力活动时，是否会感到<strong>胸部疼痛</strong>？</td>
            <td class="radio-cell"><input type="radio" name="q2" value="yes"></td>
            <td class="radio-cell"><input type="radio" name="q2" value="no"></td>
        </tr>
        <tr>
            <td class="text-center"><strong>3</strong></td>
            <td>在过去的一个月内，您是否在<strong>没有进行</strong>体力活动时也经历过胸部疼痛？</td>
            <td class="radio-cell"><input type="radio" name="q3" value="yes"></td>
            <td class="radio-cell"><input type="radio" name="q3" value="no"></td>
        </tr>
        <tr>
            <td class="text-center"><strong>4</strong></td>
            <td>您是否曾因<strong>头晕</strong>而失去平衡，或者曾经<strong>失去意识/晕厥</strong>？</td>
            <td class="radio-cell"><input type="radio" name="q4" value="yes"></td>
            <td class="radio-cell"><input type="radio" name="q4" value="no"></td>
        </tr>
        <tr>
            <td class="text-center"><strong>5</strong></td>
            <td>您是否患有某种<strong>骨骼或关节问题</strong>（例如：背部、膝盖或髋关节），且该问题可能会因体力活动而恶化？</td>
            <td class="radio-cell"><input type="radio" name="q5" value="yes"></td>
            <td class="radio-cell"><input type="radio" name="q5" value="no"></td>
        </tr>
        <tr>
            <td class="text-center"><strong>6</strong></td>
            <td>您的医生目前是否正在为您开具治疗<strong>血压或心脏问题</strong>的处方药物（例如利尿剂/水丸）？</td>
            <td class="radio-cell"><input type="radio" name="q6" value="yes"></td>
            <td class="radio-cell"><input type="radio" name="q6" value="no"></td>
        </tr>
        <tr>
            <td class="text-center"><strong>7</strong></td>
            <td>您是否知道<strong>其他任何原因</strong>表明您不应该进行体力活动？</td>
            <td class="radio-cell"><input type="radio" name="q7" value="yes"></td>
            <td class="radio-cell"><input type="radio" name="q7" value="no"></td>
        </tr>
    </table>

    <div class="result-section">
        <div class="result-card yes">
            <h3>🛑 如果您有 1 个或多个问题回答了“是”：</h3>
            <p>在增加体力活动或进行体能评估前，<strong>请务必咨询您的医生</strong>。</p>
            <p>告知医生您计划参加的运动，以及本问卷中您回答为“是”的问题。在获得医疗许路线以前，我们建议您暂停高强度训练，并由我们的持证物理治疗师为您进行保守干预。</p>
        </div>
        <div class="result-card no">
            <h3>🟢 如果您对所有问题都回答了“否”：</h3>
            <p>您可以合理确信自己能够安全地<strong>开始逐渐增加</strong>体力活动水平。</p>
            <p>建议您直接进入我们的【基础运动功能筛查 (FMS)】与【体能测试】环节。如果在未来的训练中您的健康状况发生变化导致上述问题变成“是”，请立即告知您的教练。</p>
        </div>
    </div>

    <div class="signature-box">
        <div class="sign-line">
            <span>客户签字声明 (Signature)：</span>
            <div class="line"></div>
            <p style="font-size: 12px; color: var(--text-light); margin-top: 5px;">我已阅读、理解并诚实回答了上述所有问题。</p>
        </div>
        <div class="sign-line">
            <span>签署日期 (Date)：</span>
            <div class="line"></div>
        </div>
    </div>

</div>`,
    category: '康复中心',
  },
  {
    title: '大众健身与运动康复：运动评估与筛查标准操作流程（SOP）',
    content: `<div class="container">
    <h1>🏋️ 大众健身与运动康复：运动评估与筛查 SOP</h1>
    
    <div class="meta-info">
        <p><strong>👥 适用对象：</strong> 大众健身人群、业余运动爱好者、久坐办公族、骨科术后及慢痛康复期会员。</p>
        <p><strong>👨‍⚕️ 执行人员：</strong> 私人教练/体能教练（负责常规筛查与体能）、物理治疗师/康复师（负责疼痛处理与SFMA）。</p>
    </div>

    <h2 class="phase-title">🛑 第一阶段：健康问卷与红旗分流 (Triage Flowchart)</h2>
    <div class="instruction-box">
        <strong>【操作说明】</strong> 会员首次接触必须填写 PAR-Q（体力活动准备问卷）。严禁教练跨界诊断，见痛即转介。
    </div>
    <div class="flowchart-container">
[入口问询]：目前是否有静息疼痛、运动发力时疼痛、或医生叮嘱未愈合的伤病？
      │
      ├─► 【是 (红灯)】 ──► 触发医疗边界，暂停常规体能测试，直接转介康复治疗师进行【SFMA临床评估】
      │
      └─► 【否 (绿灯)】 ──► 获准进入运动前筛查，私人教练开始执行【第二阶段：FMS基础筛查】
    </div>

    <h2 class="phase-title">🟢 第二阶段：功能动作筛查 (FMS)</h2>
    <div class="instruction-box">
        <strong>【操作说明】</strong> 用于评估无痛会员的基础动作质量。大众人群需重点关注 <strong>深蹲模式（下肢力学）</strong>、<strong>肩关节灵活性（久坐圆肩排查）</strong> 和 <strong>ASLR（久坐腘绳肌及下腰背排查）</strong>。
    </div>
    
    <h3>【FMS 现场测试记录表】</h3>
    <div class="instruction-box">注：若排除测试出现任何疼痛（阳性），对应主测试项直接记0分，并立即中止测试转介康复师。</div>
    <table>
        <tr>
            <th width="30%">测试项目</th>
            <th width="15%">左侧得分 (0-3)</th>
            <th width="15%">右侧得分 (0-3)</th>
            <th width="15%">最终得分</th>
            <th width="25%">排除性测试 (痛=0分)</th>
        </tr>
        <tr>
            <td>1. 深蹲 (Deep Squat)</td>
            <td class="text-center">--</td>
            <td class="text-center">--</td>
            <td></td>
            <td>无</td>
        </tr>
        <tr>
            <td>2. 跨栏架步 (Hurdle Step)</td>
            <td></td>
            <td></td>
            <td></td>
            <td>无</td>
        </tr>
        <tr>
            <td>3. 直线弓箭步 (In-Line Lunge)</td>
            <td></td>
            <td></td>
            <td></td>
            <td>无</td>
        </tr>
        <tr>
            <td>4. 肩关节灵活性 (Shoulder Mob.)</td>
            <td></td>
            <td></td>
            <td></td>
            <td>撞击测试：阳性[ ] 阴性[ ]</td>
        </tr>
        <tr>
            <td>5. 主动直腿抬高 (ASLR)</td>
            <td></td>
            <td></td>
            <td></td>
            <td>无</td>
        </tr>
        <tr>
            <td>6. 躯干稳定性俯卧撑 (TSPU)</td>
            <td class="text-center">--</td>
            <td class="text-center">--</td>
            <td></td>
            <td>脊柱伸展：阳性[ ] 阴性[ ]</td>
        </tr>
        <tr>
            <td>7. 旋转稳定性 (Rotary Stab.)</td>
            <td></td>
            <td></td>
            <td></td>
            <td>脊柱屈曲：阳性[ ] 阴性[ ]</td>
        </tr>
        <tr>
            <td colspan="3" style="text-align: right;"><strong>总分 (Max: 21)</strong></td>
            <td colspan="2" style="font-size: 18px; font-weight: bold; color: var(--primary);">/21</td>
        </tr>
        <tr>
            <td colspan="5" class="text-center" style="background: #f0fdfa; color: #0f766e;">
                （大众人群总分 <strong>< 14分</strong> 或 <strong>出现单边不对称(如左1右3)</strong> 时，受伤风险显著增加，禁忌大重量负重）
            </td>
        </tr>
    </table>

    <h2 class="phase-title">⚖️ 第三阶段：动态平衡与关节稳定性测试 (YBT-LQ)</h2>
    <div class="instruction-box">
        <strong>【操作说明】</strong> 重点评估下肢（踝/膝/髋）的动态平衡能力。对预防老年人跌倒、跑者膝损伤、踝关节扭伤康复者尤为重要。
    </div>
    
    <div class="formula-box">
        <strong>【综合得分计算】</strong><br>
        综合得分 (%) = [(前方 + 内后 + 外后) / (3 × 实际下肢长度)] × 100
    </div>

    <h3>【YBT 下肢测试数据表】</h3>
    <table>
        <tr>
            <th width="25%">测试方向</th>
            <th width="15%">左腿支撑 (cm)</th>
            <th width="15%">右腿支撑 (cm)</th>
            <th width="15%">左右差值</th>
            <th width="30%">大众健身/康复意义</th>
        </tr>
        <tr>
            <td>肢体长度 (ASIS至内踝)</td>
            <td></td>
            <td></td>
            <td class="text-center">--</td>
            <td class="text-center">--</td>
        </tr>
        <tr>
            <td>Anterior (前方伸展)</td>
            <td></td>
            <td></td>
            <td></td>
            <td>左右差 ≥ 4cm 预示非接触性损伤高风险</td>
        </tr>
        <tr>
            <td>Posteromedial (内后方)</td>
            <td></td>
            <td></td>
            <td></td>
            <td>反映臀中肌/踝关节综合稳定能力</td>
        </tr>
        <tr>
            <td>Posterolateral (外后方)</td>
            <td></td>
            <td></td>
            <td></td>
            <td>反映髋关节旋转控制力与核心抗扭转力</td>
        </tr>
        <tr>
            <td><strong>综合得分 (Composite %)</strong></td>
            <td class="text-center">%</td>
            <td class="text-center">%</td>
            <td class="text-center">--</td>
            <td>健康标准：女性 > 94%，男性 > 89%</td>
        </tr>
    </table>

    <h2 class="phase-title">📈 第四阶段：大众基础体能评估 (Fitness Assessment)</h2>
    <div class="instruction-box">
        <strong>【操作说明】</strong> 仅对无痛且FMS动作过关的会员进行。根据客户实际能力和年龄选择合适的回归/进阶测试动作。
    </div>
    <table>
        <tr>
            <th>测试维度</th>
            <th>测试项目 (选其一)</th>
            <th>测试结果记录</th>
            <th>评估意义</th>
        </tr>
        <tr>
            <td class="text-center"><strong>心肺耐力</strong></td>
            <td>3分钟台阶测试 / 跑步机次极量心率测试</td>
            <td>恢复心率：____ bmp <br>推算 VO2max：____</td>
            <td>评估心血管健康与燃脂区间制定</td>
        </tr>
        <tr>
            <td class="text-center"><strong>核心与局部耐力</strong></td>
            <td>平板支撑 (Plank) / 卷腹测试</td>
            <td>坚持时长：____ 秒 <br>完成次数：____ 次</td>
            <td>腰椎稳定性与久坐背痛风险排查</td>
        </tr>
        <tr>
            <td class="text-center"><strong>上肢相对力量</strong></td>
            <td>标准俯卧撑 / 跪姿俯卧撑 (至力竭)</td>
            <td class="text-center">____ 次</td>
            <td>上肢推力及肩带稳定基础</td>
        </tr>
        <tr>
            <td class="text-center"><strong>下肢绝对/相对力量</strong></td>
            <td>自重深蹲(次) / 腿举 5RM 估算</td>
            <td class="text-center">最大重量：____ KG <br>次数：____ 次</td>
            <td>日常起居防跌倒能力与下肢肌量指标</td>
        </tr>
    </table>

    <h2 class="phase-title">🩺 第五阶段：SFMA 临床评估 (康复师专属)</h2>
    <div class="instruction-box">
        <strong>【操作说明】</strong> 当客户在动作中感到疼痛，转由康复治疗师通过 SFMA 寻找诱发疼痛的生物力学根源。
    </div>
    
    <h3>【SFMA 交通信号灯与顶级评估记录表】</h3>
    <table>
        <tr>
            <th width="15%">诊断分类</th>
            <th width="25%">含义</th>
            <th width="15%">信号灯</th>
            <th width="45%">康复师操作指令</th>
        </tr>
        <tr>
            <td class="text-center"><strong>FN</strong></td>
            <td>功能良好且无痛</td>
            <td class="text-center"><span class="badge red">🛑 停止</span></td>
            <td>问题不在此处，无需进一步分解测试。</td>
        </tr>
        <tr>
            <td class="text-center"><strong>FP / DP</strong></td>
            <td>有疼痛 (正常/受限)</td>
            <td class="text-center"><span class="badge yellow">⚠️ 标记</span></td>
            <td>记录疼痛刺激，暂停此模式突破，以消炎镇痛干预为主。</td>
        </tr>
        <tr>
            <td class="text-center"><strong>DN</strong></td>
            <td>功能障碍且无痛</td>
            <td class="text-center"><span class="badge green">🟢 突破</span></td>
            <td><strong>核心突破口。</strong>通过改变体位（如站姿变仰卧）或施加被动外力，鉴别是关节/软组织受限，还是神经肌肉控制障碍。</td>
        </tr>
    </table>

    <div style="column-count: 2; column-gap: 40px; font-size: 14px; margin-bottom: 20px; background: #f8fafc; padding: 15px; border-radius: 8px;">
        <p><strong>多部位屈曲 (弯腰触趾)</strong><br> [ ]FN  [ ]FP  [ ]DP  [ ]DN</p>
        <p><strong>多部位伸展 (双手叉腰后仰)</strong><br> [ ]FN  [ ]FP  [ ]DP  [ ]DN</p>
        <p><strong>单腿站立 (闭眼/睁眼)</strong><br> L: [ ]FN [ ]FP [ ]DP [ ]DN<br> R: [ ]FN [ ]FP [ ]DP [ ]DN</p>
        <p><strong>颈部与上肢复合模式 (摸背/摸肩)</strong><br> L: [ ]FN [ ]FP [ ]DP [ ]DN<br> R: [ ]FN [ ]FP [ ]DP [ ]DN</p>
    </div>

    <h2 class="phase-title">🛠️ 第六阶段：纠正性训练处方与 4x4 矩阵</h2>
    <div class="instruction-box">
        <strong>【操作说明】</strong> 私教与康复师基于测试结果，遵循 <strong>“灵活性优先于稳定性，稳定性优先于力量”</strong> 的原则制定训练计划。
    </div>

    <h3>【4x4 康复与纠正性训练进阶矩阵】</h3>
    <div class="instruction-box" style="background-color: #fff7ed; border-color: #fdba74; color: #c2410c;">
        <strong>安全准则：</strong>一切重置训练从 1x1（低姿势、低神经负荷）开始。确保客户建立正确的发力记忆后，再向高姿势（站立）和高阻力进阶。
    </div>
    <table>
        <tr>
            <th width="20%">体位难度 \\ 负荷</th>
            <th width="20%">1. 无阻力+辅助 (唤醒)</th>
            <th width="20%">2. 自重无辅助 (控制)</th>
            <th width="20%">3. 加阻力+辅助 (强化)</th>
            <th width="20%">4. 加阻力无辅助 (抗阻)</th>
        </tr>
        <tr>
            <td style="background:#f1f5f9; font-weight:bold;">1. 仰卧/俯卧位<br><span style="font-size: 12px; font-weight: normal;">(消除重力影响)</span></td>
            <td>辅助呼吸训练<br>教练辅助死虫式</td>
            <td>主动死虫式<br>俯卧T字伸展</td>
            <td>弹力带辅助臀桥<br>抗阻卷腹(教练托扶)</td>
            <td>弹力带死虫式<br>负重臀桥</td>
        </tr>
        <tr>
            <td style="background:#f1f5f9; font-weight:bold;">2. 四足/桥式<br><span style="font-size: 12px; font-weight: normal;">(多点支撑)</span></td>
            <td>辅助猫牛式<br>对角线伸展(轻度)</td>
            <td>标准鸟狗式<br>侧支撑(短力臂)</td>
            <td>弹力带抗阻猫牛式</td>
            <td>阻力带鸟狗式<br>标准平板支撑</td>
        </tr>
        <tr>
            <td style="background:#f1f5f9; font-weight:bold;">3. 双膝/半跪姿<br><span style="font-size: 12px; font-weight: normal;">(核心高度参与)</span></td>
            <td>半跪姿维持<br>(抓握固定物)</td>
            <td>半跪姿躯干转动<br>高跪姿后仰</td>
            <td>半跪姿木棍抗扭转</td>
            <td>半跪姿绳索下拉/推举</td>
        </tr>
        <tr>
            <td style="background:#f1f5f9; font-weight:bold;">4. 站立/动态位<br><span style="font-size: 12px; font-weight: normal;">(最高神经负荷)</span></td>
            <td>TRX辅助深蹲<br>扶墙单腿硬拉</td>
            <td>自重深蹲<br>弓箭步走</td>
            <td>站姿弹力带转体<br>高脚杯深蹲(教练保护)</td>
            <td>杠铃深蹲<br>负重单腿硬拉</td>
        </tr>
    </table>

    <div class="formula-box" style="border-style: solid; background: #f0fdf4; border-color: var(--green); color: #166534;">
        <strong>【实战处方示例：久坐办公族深蹲受限】</strong><br><br>
        • <strong>情景 A（灵活性问题）</strong>：客户下蹲时脚跟抬起，被动测试发现踝背屈角度严重不足。<br>
        👉 <strong>处方</strong>：执行手法/筋膜枪放松小腿三头肌，拉伸比目鱼肌。获得角度后，进入深蹲训练。<br><br>
        • <strong>情景 B（稳定性问题）</strong>：客户下蹲时腰部反弓/骨盆翻转，但仰卧位测试髋关节灵活性极佳。<br>
        👉 <strong>处方</strong>：说明核心无法在站立时稳定骨盆。从 4x4 矩阵的 <strong>1x2（死虫式激活核心）</strong> 开始，进阶到 <strong>3x2（半跪姿抗旋转）</strong>，最后回到 <strong>4x2（自重深蹲）</strong> 进行动作重构。
    </div>

</div>`,
    category: '康复中心',
  },
  {
    title: '精英水上项目：高水平运动表现测试与评估 SOP',
    content: `<div class="container">
    <div class="header-section">
        <h1>精英水上项目测试评估 SOP</h1>
        <div class="subtitle">高水平运动表现与生理生化监控 (Elite Performance Profiling)</div>
    </div>
    
    <div class="meta-info">
        <div class="meta-item"><strong>👥 适用梯队：</strong> 国家队、省市一线队、大学高水平校队</div>
        <div class="meta-item"><strong>🔬 测试环境：</strong> 恒温恒湿实验室或室内训练馆 (20-22°C)</div>
        <div class="meta-item"><strong>⏱️ 测试周期：</strong> 冬训初、冬训末、赛前6周、大赛后恢复期</div>
        <div class="meta-item"><strong>🛠️ 核心设备：</strong> Concept2/Dansprint测功仪、便携式血乳酸分析仪 (如EKF)、测力台、心率带</div>
    </div>

    <h2 class="phase-title">📐 第一阶段：形态学与身体成分 (Anthropometric Profiling)</h2>
    <div class="instruction-box">
        水上项目对杠杆比例（如臂展长、坐高比例）及功率体重比要求极高。测试需在清晨空腹状态下进行。
    </div>
    <table>
        <tr>
            <th width="20%">测试项目</th>
            <th width="30%">测试方法/仪器</th>
            <th width="20%">实测数据</th>
            <th width="30%">世界级标杆 (男 / 女)</th>
        </tr>
        <tr>
            <td><strong>基础形态</strong></td>
            <td class="text-left">身高 (cm) / 体重 (kg)</td>
            <td>H: <span class="input-line"></span> W: <span class="input-line"></span></td>
            <td class="benchmark">公开级赛艇多在 190+ / 180+ cm</td>
        </tr>
        <tr>
            <td><strong>核心杠杆</strong></td>
            <td class="text-left">臂展 (cm) / 指间距至身高比</td>
            <td><span class="input-line"></span> cm (<span class="input-line"></span> %)</td>
            <td class="benchmark">臂展 > 身高 (猿指数 > 1.03)</td>
        </tr>
        <tr>
            <td><strong>躯干比例</strong></td>
            <td class="text-left">坐高 (cm) / 坐高指数 (%)</td>
            <td><span class="input-line"></span> cm (<span class="input-line"></span> %)</td>
            <td class="benchmark">长躯干利于划水冲程</td>
        </tr>
        <tr>
            <td><strong>身体成分</strong></td>
            <td class="text-left">DEXA / ISAK 8点皮褶厚度推算</td>
            <td>体脂率: <span class="input-line"></span> %</td>
            <td class="benchmark">男 8-12% / 女 14-18%</td>
        </tr>
    </table>

    <h2 class="phase-title">🩸 第二阶段：阶梯血乳酸与有氧代谢能力 (Step Lactate Profiling)</h2>
    <div class="alert-box">
        <strong>【操作规范】</strong> 采用 7 × 4 分钟测功仪递增负荷测试（国际赛艇黄金标准）。每阶间隔 30 秒采集指尖血或耳垂血。通过乳酸拐点确定 LT1 (基础有氧阈) 和 LT2 (无氧阈，通常为 4 mmol/L)。
    </div>
    <table>
        <tr>
            <th width="10%">阶梯</th>
            <th width="20%">配速目标 (/500m)</th>
            <th width="15%">输出功率 (W)</th>
            <th width="15%">心率 (bpm)</th>
            <th width="15%">血乳酸 (mmol/L)</th>
            <th width="25%">RPE 主观疲劳 (1-10)</th>
        </tr>
        <tr>
            <td>Step 1</td>
            <td>目标配速 + 24秒</td>
            <td><span class="input-line"></span></td>
            <td><span class="input-line"></span></td>
            <td><span class="input-line"></span></td>
            <td><span class="input-line"></span></td>
        </tr>
        <tr>
            <td>Step 2</td>
            <td>目标配速 + 20秒</td>
            <td><span class="input-line"></span></td>
            <td><span class="input-line"></span></td>
            <td><span class="input-line"></span></td>
            <td><span class="input-line"></span></td>
        </tr>
        <tr>
            <td>Step 3</td>
            <td>目标配速 + 16秒</td>
            <td><span class="input-line"></span></td>
            <td><span class="input-line"></span></td>
            <td><span class="input-line"></span></td>
            <td><span class="input-line"></span></td>
        </tr>
        <tr>
            <td>Step 4</td>
            <td>目标配速 + 12秒</td>
            <td><span class="input-line"></span></td>
            <td><span class="input-line"></span></td>
            <td><span class="input-line"></span></td>
            <td><span class="input-line"></span></td>
        </tr>
        <tr>
            <td>Step 5</td>
            <td>目标配速 + 8秒</td>
            <td><span class="input-line"></span></td>
            <td><span class="input-line"></span></td>
            <td><span class="input-line"></span></td>
            <td><span class="input-line"></span></td>
        </tr>
        <tr>
            <td>Step 6</td>
            <td>目标配速 + 4秒</td>
            <td><span class="input-line"></span></td>
            <td><span class="input-line"></span></td>
            <td><span class="input-line"></span></td>
            <td><span class="input-line"></span></td>
        </tr>
        <tr>
            <td style="color: var(--red); font-weight: bold;">Step 7 (Max)</td>
            <td style="color: var(--red); font-weight: bold;">极限全力表现</td>
            <td><span class="input-line"></span></td>
            <td><span class="input-line"></span></td>
            <td><span class="input-line"></span></td>
            <td><span class="input-line"></span></td>
        </tr>
        <tr>
            <td colspan="6" class="text-left" style="background: #fffbeb;">
                <strong>📊 阈值数据提取：</strong> 
                LT1 (2 mmol/L) 对应功率: <strong><span class="input-line"></span> W</strong> ；
                LT2 (4 mmol/L) 对应功率: <strong><span class="input-line"></span> W</strong>
            </td>
        </tr>
    </table>

    <h2 class="phase-title">🏋️ 第三阶段：最大力量与生物力学输出 (Strength & Biomechanics)</h2>
    <div class="instruction-box">
        水上项目是典型的力量耐力与爆发力结合项目。<strong>卧拉（Bench Pull）</strong>是评估上肢水平划水力量的核心指标。必须通过测速仪（如 VBT 设备）监控杠铃速度。
    </div>
    <table>
        <tr>
            <th width="20%">测试动作</th>
            <th width="25%">测试维度</th>
            <th width="20%">实测数据 (1RM)</th>
            <th width="15%">相对力量比</th>
            <th width="20%">世界级标杆 (男)</th>
        </tr>
        <tr>
            <td class="text-left"><strong>最大卧拉 (Bench Pull)</strong></td>
            <td class="text-left">上肢水平拉力链 (背阔、菱形肌)</td>
            <td><span class="input-line"></span> KG</td>
            <td><span class="input-line"></span> × BW</td>
            <td class="benchmark">1.3 - 1.5 × BW</td>
        </tr>
        <tr>
            <td class="text-left"><strong>杠铃深蹲 (Back Squat)</strong></td>
            <td class="text-left">下肢蹬伸绝对力量 (股四、臀大)</td>
            <td><span class="input-line"></span> KG</td>
            <td><span class="input-line"></span> × BW</td>
            <td class="benchmark">1.8 - 2.0 × BW</td>
        </tr>
        <tr>
            <td class="text-left"><strong>硬拉 (Deadlift)</strong></td>
            <td class="text-left">后侧链/躯干抗屈曲传导力</td>
            <td><span class="input-line"></span> KG</td>
            <td><span class="input-line"></span> × BW</td>
            <td class="benchmark">2.0 - 2.2 × BW</td>
        </tr>
        <tr>
            <td class="text-left"><strong>等长收缩大腿中段拉 (IMTP)</strong></td>
            <td class="text-left">测力台测试峰值发力率 (RFD)</td>
            <td>PF: <span class="input-line"></span> N</td>
            <td><span class="input-line"></span> N/kg</td>
            <td class="benchmark">> 45 N/kg</td>
        </tr>
    </table>

    <h2 class="phase-title">🚣 第四阶段：专项测功仪极致竞速 (Ergometer Sprint & Endurance)</h2>
    <div class="instruction-box">
        根据项目差异选择距离：赛艇主测 2000m（混合代谢系统）；皮划艇主测 1000m/500m/200m。以下为通用的无氧/有氧能力拆解测试。
    </div>
    <table>
        <tr>
            <th width="20%">测试项目</th>
            <th width="30%">供能系统与专项意义</th>
            <th width="25%">测试结果</th>
            <th width="25%">精英指标参考</th>
        </tr>
        <tr>
            <td><strong>10秒 峰值功率 (10s Peak)</strong></td>
            <td class="text-left">磷酸原系统 (ATP-CP) / 起航爆发力</td>
            <td>最高瓦数: <span class="input-line"></span> W</td>
            <td class="benchmark">赛艇男 > 850W</td>
        </tr>
        <tr>
            <td><strong>1分钟 全力冲刺 (1min Max)</strong></td>
            <td class="text-left">糖酵解无氧耐力 / 冲刺与途中跑接轨</td>
            <td>平均功率: <span class="input-line"></span> W</td>
            <td class="benchmark">赛艇男 > 600W</td>
        </tr>
        <tr>
            <td><strong>2000m 赛艇 / 1000m 划艇</strong></td>
            <td class="text-left">黄金专项能力测试 (有氧为主，无氧为辅)</td>
            <td>完赛时间: <span class="input-line"></span><br>平均配速: <span class="input-line"></span></td>
            <td class="benchmark">男子公开级 < 5:50<br>女子公开级 < 6:40</td>
        </tr>
        <tr>
            <td><strong>测试后恢复心率 (HRR)</strong></td>
            <td class="text-left">迷走神经恢复能力 / 疲劳清除率</td>
            <td>1min 降幅: <span class="input-line"></span> bpm</td>
            <td class="benchmark">> 30-40 bpm 降幅</td>
        </tr>
    </table>

    <div style="margin-top: 40px; border-top: 2px dashed var(--border-color); padding-top: 20px; display: flex; justify-content: space-between;">
        <div>
            <strong>主测教练签字：</strong> __________________
        </div>
        <div>
            <strong>科研监测员签字：</strong> __________________
        </div>
        <div>
            <strong>测试日期：</strong> ____年__月__日
        </div>
    </div>
</div>`,
    category: '水上竞技',
  },
  {
    title: '国家队级：整合运动心肺/心电/血压的高水平测试 SOP',
    content: `<div class="container">
    <div class="header-section">
        <h1>精英水上项目：多维生理与运动能力测试 SOP</h1>
        <div class="subtitle">融合 Vyntus CPX 心肺、十二导联心电与运动血压监测体系</div>
    </div>

    <div class="schedule-box">
        <h3 style="margin-top:0; border:none;">🗓️ 50人梯队 4天流水线排期战略 (Cohort Scheduling)</h3>
        <p style="font-size: 14px;"><strong>分组逻辑：</strong>将50名运动员分为 A、B、C、D 四个大组（每组约12-13人）。保证所有代谢测试在无疲劳累积状态下进行，所有测试通过 SentrySuite 软件实现同库管理。</p>
        <table>
            <tr>
                <th>时间 / 分组</th>
                <th>A组 (12人)</th>
                <th>B组 (12人)</th>
                <th>C组 (13人)</th>
                <th>D组 (13人)</th>
            </tr>
            <tr>
                <td><strong>Day 1</strong></td>
                <td><strong>静息代谢 (REE)</strong> + 形态学<br><span style="font-size:12px; color:var(--text-light)">(清晨空腹)</span></td>
                <td>力量与生物力学测试<br><span style="font-size:12px; color:var(--text-light)">(下午正常训练状态)</span></td>
                <td>常规水上技术训练</td>
                <td>常规水上技术训练</td>
            </tr>
            <tr>
                <td><strong>Day 2</strong></td>
                <td>力量与生物力学测试</td>
                <td><strong>静息代谢 (REE)</strong> + 形态学</td>
                <td>常规水上技术训练</td>
                <td>常规水上技术训练</td>
            </tr>
            <tr>
                <td><strong>Day 3</strong></td>
                <td colspan="2" style="background:#fffbeb; font-weight:bold; color:#92400e;">全面心肺极限阶梯测试 (CPET + ECG + BP + 乳酸)</td>
                <td><strong>静息代谢</strong> + 形态学</td>
                <td>力量与生物力学</td>
            </tr>
            <tr>
                <td><strong>Day 4</strong></td>
                <td>常规/恢复训练</td>
                <td>常规/恢复训练</td>
                <td colspan="2" style="background:#fffbeb; font-weight:bold; color:#92400e;">全面心肺极限阶梯测试 (CPET + ECG + BP + 乳酸)</td>
            </tr>
        </table>
    </div>

    <h2 class="phase-title">🔬 第一阶段：静息能量消耗 (REE) 与形态学监测</h2>
    <div class="equipment-highlight">
        <strong>核心设备：</strong> Vyntus CPX (搭载 Canopy 营养代谢测试模块 [cite: 12, 103])。<br>
        <strong>科学优势：</strong> 采用面罩或头罩测量脂肪、蛋白质和碳水化合物的相对贡献 [cite: 103, 111, 123]。由于风机不接触受试者呼出气体 [cite: 127, 137] 且采用一次性薄膜 [cite: 132]，一人一换，50人连续测试极大降低了交叉感染风险。
    </div>
    <table>
        <tr>
            <th width="25%">测试项目</th>
            <th width="35%">操作规范</th>
            <th width="40%">录入数据与标杆</th>
        </tr>
        <tr>
            <td class="text-left"><strong>静息能量消耗 (REE)</strong></td>
            <td class="text-left">清晨空腹平躺。戴上 Canopy 头罩，待患者达到稳态条件 [cite: 103]。系统自动捕捉 VCO2 和 VO2 [cite: 105, 106, 117, 118]。</td>
            <td class="text-left">
                • 基础代谢率 (EE): <span class="input-line"></span> kcal/day<br>
                • 呼吸交换率 (RER): <span class="input-line"></span> <span style="font-size:12px">(正常约 0.8)</span><br>
                • 碳水/脂肪消耗比: <span class="input-line"></span> % / <span class="input-line"></span> %
            </td>
        </tr>
        <tr>
            <td class="text-left"><strong>核心杠杆与形态</strong></td>
            <td class="text-left">测量身高、体重、臂展、坐高。采用DEXA或皮褶厚度测体脂。</td>
            <td class="text-left">
                • 猿指数 (臂展/身高): <span class="input-line"></span> <span style="font-size:12px">(>1.03为佳)</span><br>
                • 体脂率: <span class="input-line"></span> %
            </td>
        </tr>
    </table>

    <h2 class="phase-title">🫀 第二阶段：黄金级心肺综合评估 (CPET + ECG + BP + Lactate)</h2>
    <div class="equipment-highlight">
        <strong>核心设备连动方案：</strong> <br>
        1. <strong>心电监测：</strong> 穿戴 Vyntus ECG 蓝牙采集模块（重量仅 220g [cite: 53]，12导联全系回顾，无引线干扰运动员划船）。<br>
        2. <strong>运动血压：</strong> 佩戴 SunTech 专利 Orbit-K 防滑袖带，开启 DKA (三维K氏音分析) 模式 抵抗测功仪震动。<br>
        3. <strong>气量代谢：</strong> 佩戴 Vyntus 面罩与数字式容量传感器 (DVT) [cite: 27] 进行每口气数据采集。<br>
        <strong>操作效能：</strong> 全自动容积定标仅需30秒，无需3L定标筒，极其适合50人大规模连续作战。
    </div>
    
    <h3>1. 测功仪 7×4 阶梯极量测试数据提取</h3>
    <table>
        <tr>
            <th>负荷级</th>
            <th>瓦数(W)</th>
            <th>心率(BPM)</th>
            <th>收缩压/舒张压</th>
            <th>血乳酸 (mmol/L)</th>
            <th>氧脉搏(VO2/HR)</th>
        </tr>
        <tr><td>Step 1-4</td><td>递增</td><td>自动同步</td><td>自动同步DKA</td><td>耳垂采血指认</td><td>自动抓取</td></tr>
        <tr><td>Step 5-6</td><td>大强度</td><td>自动同步</td><td>自动同步DKA</td><td>耳垂采血指认</td><td>自动抓取</td></tr>
        <tr>
            <td style="color:var(--red); font-weight:bold;">MAX 极量</td>
            <td><span class="input-line"></span> W</td>
            <td><span class="input-line"></span> BPM</td>
            <td><span class="input-line"></span> / <span class="input-line"></span></td>
            <td><span class="input-line"></span> mmol</td>
            <td><span class="input-line"></span> mL/b</td>
        </tr>
    </table>

    <h3>2. SentrySuite 自动化临床数据诊断</h3>
    <table>
        <tr>
            <th width="30%">高阶生理指标</th>
            <th width="30%">测试结果自动抓取</th>
            <th width="40%">精英赛艇/皮划艇标杆</th>
        </tr>
        <tr>
            <td><strong>最大摄氧量 (VO2Max)</strong> <span class="tag">系统核心</span></td>
            <td>绝对: <span class="input-line"></span> L/min<br>相对: <span class="input-line"></span> ml/kg/min</td>
            <td class="text-left">男公开级 > 6.0 L/min 或 > 65 ml/kg/min<br>女公开级 > 4.5 L/min 或 > 55 ml/kg/min</td>
        </tr>
        <tr>
            <td><strong>通气无氧阈 (VT1 / VT2)</strong> <span class="tag">自动斜率</span></td>
            <td>VT1 对应负荷: <span class="input-line"></span> W<br>VT2 对应负荷: <span class="input-line"></span> W</td>
            <td class="text-left">SentrySuite 自动利用不同参数确定 VT1, VT2, VT3 [cite: 242]。用于精准划分日常有氧/混氧/无氧训练区间。</td>
        </tr>
        <tr>
            <td><strong>运动后恢复效能 (Recovery)</strong></td>
            <td>VO2 T1/2: <span class="input-line"></span> 分钟 [cite: 210]<br>HRR 1min降幅: <span class="input-line"></span> bpm [cite: 217]</td>
            <td class="text-left">系统自动计算 VO2 恢复半衰期 (VO2 T1/2) [cite: 210, 217]。半衰期越短，代谢清除能力越强。</td>
        </tr>
        <tr>
            <td><strong>震荡呼吸 (EOV)</strong> <span class="tag">异常排查</span></td>
            <td>系统判定: [ ] 阴性 [ ] 阳性</td>
            <td class="text-left">Vyntus CPX具备EOV自动识别功能。阳性预示极高心衰/过度训练风险 [cite: 227]。</td>
        </tr>
    </table>

    <h2 class="phase-title">🏋️ 第三/四阶段：专项力量与低氧环境模拟 (High-Performance)</h2>
    <div class="equipment-highlight">
        对于准备世锦赛/奥运会的顶尖梯队，可接入 Vyntus CPX 的 <strong>High/Low FiO2 功能（选配）</strong>[cite: 139]。通过降低氧浓度 (如 14-15% O2) [cite: 142]，可以直接在平原实验室内模拟海拔约 2500m [cite: 158] 的高原测功仪竞速，评估运动员的“缺氧适应性 (Hypoxia Tolerance)”与是否适合高海拔飞行/比赛 [cite: 157, 160, 161]。
    </div>
    <table>
        <tr>
            <th width="20%">测试类别</th>
            <th width="30%">测试项目</th>
            <th width="25%">实测记录</th>
            <th width="25%">专项意义</th>
        </tr>
        <tr>
            <td rowspan="2"><strong>专项神经肌肉力量</strong></td>
            <td>最大卧拉 (Bench Pull 1RM)</td>
            <td><span class="input-line"></span> KG (<span class="input-line"></span> 倍体重)</td>
            <td>上肢划水水平绝对/相对力量</td>
        </tr>
        <tr>
            <td>测力台等长中段拉 (IMTP)</td>
            <td>峰值力(PF): <span class="input-line"></span> N</td>
            <td>下肢起航蹬伸发力率(RFD)</td>
        </tr>
        <tr>
            <td rowspan="2"><strong>测功仪专项与低氧</strong></td>
            <td>无氧功率：1分钟全力冲刺</td>
            <td>平均瓦数: <span class="input-line"></span> W</td>
            <td>糖酵解耐力 / 冲刺接轨</td>
        </tr>
        <tr>
            <td>Low FiO2 高原模拟测试 [cite: 159, 160]</td>
            <td>模拟海拔2500m 完赛时:<br>SpO2下降至: <span class="input-line"></span> %</td>
            <td>评估高原集训前的身体耐受度边界。</td>
        </tr>
    </table>

    <div style="margin-top: 40px; border-top: 2px dashed var(--border-color); padding-top: 20px; display: flex; justify-content: space-between;">
        <div><strong>主测教练签字：</strong> __________________</div>
        <div><strong>医疗/科研主管签字：</strong> __________________</div>
        <div><strong>日期：</strong> ____年__月__日</div>
    </div>
</div>`,
    category: '水上竞技',
  },
  {
    title: '国家水上项目综合测试与训练干预 SOP',
    content: `<div class="container">
    <div class="header">
        <h1>🌐 高水平水上项目：多维运动能力评估与干预 SOP</h1>
        <div class="subtitle">融合医学分流、功能控制、绝对力量与 Vyntus CPX 极限代谢体系</div>
    </div>

    <div class="logistics-box">
        <h3>👥 50人规模矩阵轮转表 & 人员编组 (5天周期)</h3>
        <p style="font-size: 14px; margin-bottom: 15px;">
            <strong>人员统筹：</strong> 1名总控 + 2名医疗人员(Station 1) + 3名研究生(Station 2) + 2名体能教练(Station 3) + 3名仪器专家(Station 4/5)。<br>
            <strong>梯队划分：</strong> 全队50人分为 A、B、C、D、E 组（每组10人）。严格遵守“静息代谢(清晨) → 运动筛查 → 极限测试(独立日)”的无疲劳累积原则。
        </p>
        <table>
            <tr>
                <th width="10%">日期</th>
                <th width="18%">清晨 (06:30-08:30)</th>
                <th width="24%">上午 (09:00-11:30)</th>
                <th width="24%">下午 (14:30-17:00)</th>
                <th width="24%">全天独立机动</th>
            </tr>
            <tr>
                <td class="text-center"><strong>Day 1</strong></td>
                <td class="text-center">A组 (空腹REE)</td>
                <td class="text-center">A组 (筛查+力量)</td>
                <td class="text-center">B组 (筛查+力量)</td>
                <td class="text-center">--</td>
            </tr>
            <tr>
                <td class="text-center"><strong>Day 2</strong></td>
                <td class="text-center">B组 (空腹REE)</td>
                <td class="text-center">C组 (筛查+力量)</td>
                <td class="text-center">D组 (筛查+力量)</td>
                <td class="text-center" style="background:#e0f2fe; font-weight:bold;">A组极限心肺 CPET</td>
            </tr>
            <tr>
                <td class="text-center"><strong>Day 3</strong></td>
                <td class="text-center">C组 (空腹REE)</td>
                <td class="text-center">E组 (筛查+力量)</td>
                <td class="text-center">教练数据复盘</td>
                <td class="text-center" style="background:#e0f2fe; font-weight:bold;">B组极限心肺 CPET</td>
            </tr>
            <tr>
                <td class="text-center"><strong>Day 4</strong></td>
                <td class="text-center">D组 (空腹REE)</td>
                <td class="text-center">A/B组 (水上恢复训练)</td>
                <td class="text-center">C/D/E组 (战术分析)</td>
                <td class="text-center" style="background:#e0f2fe; font-weight:bold;">C组极限心肺 CPET</td>
            </tr>
            <tr>
                <td class="text-center"><strong>Day 5</strong></td>
                <td class="text-center">E组 (空腹REE)</td>
                <td class="text-center" colspan="2" style="background:#e0f2fe; font-weight:bold;">D组 & E组 极限心肺 CPET 并行处理</td>
                <td class="text-center">测试结营总结</td>
            </tr>
        </table>
    </div>

    <h2 class="station-title">🛑 模块 1：入口分流与功能筛查 (Triage & FMS)</h2>
    <p style="font-size: 14px; color: #475569; margin-bottom: 20px;"><strong>执行人员：</strong> 队医 + 3名体育研究生。<strong>地点：</strong> 康复室/室内力量房。</p>
    <table>
        <tr>
            <th width="20%">测试工序</th>
            <th width="30%">内容与方法</th>
            <th width="50%">科学诊断与执行逻辑</th>
        </tr>
        <tr>
            <td class="text-center"><strong>1. PAR-Q 问诊</strong></td>
            <td>疼痛询问与关节红旗病征排查。</td>
            <td><span class="badge red">有痛</span> 立即脱离大部队，由队医执行 SFMA 顶级评估寻找病灶。<br><span class="badge green">无痛</span> 进入下一步 FMS 筛查。</td>
        </tr>
        <tr>
            <td class="text-center"><strong>2. 形态学录入</strong></td>
            <td>身高、臂展、指间距、皮褶厚度/DEXA。</td>
            <td>获取水上项目核心指标：猿指数(>1.03)、坐高比、体脂率。</td>
        </tr>
        <tr>
            <td class="text-center"><strong>3. FMS基础筛查</strong></td>
            <td>7项动作模式评估 (水上重点关注 ASLR 主动直腿抬高与 TSPU 躯干稳定性)。</td>
            <td><span class="badge yellow">总分<14 或 存在1分/单侧不对称</span>：核心/柔韧性存在隐患，预警高阶体能训练。<br><span class="badge green">全员达标</span>：进入下一站。</td>
        </tr>
        <tr>
            <td class="text-center"><strong>4. YBT 下肢动态平衡</strong></td>
            <td>三方向到达距离测定。</td>
            <td>评估下肢综合发力控制，左右腿前方伸展差值 >4cm 列入伤病高危名单。</td>
        </tr>
    </table>

    <h2 class="station-title">🏋️ 模块 2：专项神经肌肉与生物力学 (Biomechanics)</h2>
    <p style="font-size: 14px; color: #475569; margin-bottom: 20px;"><strong>执行人员：</strong> 2名体能教练。<strong>地点：</strong> 力量房。确保运动员已完成充分的热身。</p>
    <table>
        <tr>
            <th width="25%">核心指标测试</th>
            <th width="45%">操作规范与设备</th>
            <th width="30%">国际强队黄金标杆</th>
        </tr>
        <tr>
            <td class="text-center"><strong>等长收缩大腿中段拉<br>(IMTP)</strong></td>
            <td>在测力台上进行，模拟皮划艇/赛艇起航的极限蹬伸。捕获峰值力 (Peak Force) 和发力率 (RFD)。</td>
            <td class="text-center">PF > 45 N/kg<br>(评估瞬间神经爆发力)</td>
        </tr>
        <tr>
            <td class="text-center"><strong>最大卧拉<br>(Bench Pull 1RM)</strong></td>
            <td>使用 VBT (基于速度的训练) 测速仪监控杠铃轨迹。评估上肢后侧链绝对水平拉力。</td>
            <td class="text-center">男 1.3 - 1.5 倍体重<br>女 1.1 - 1.3 倍体重</td>
        </tr>
        <tr>
            <td class="text-center"><strong>握力与核心抗旋</strong></td>
            <td>Jamar 握力计双侧测试；Pallof Press (抗旋推升) 最大抗阻测定。</td>
            <td class="text-center">双侧握力差 < 10%<br>保证桨面控制力</td>
        </tr>
    </table>

    <h2 class="station-title">🫀 模块 3：极限心肺与代谢监控 (Elite CPET Lab)</h2>
    <p style="font-size: 14px; color: #475569; margin-bottom: 20px;"><strong>执行人员：</strong> 3名器材与生理学专家。<strong>核心设备：</strong> Vyntus CPX, SunTech Orbit-K, Vyntus ECG。<strong>操作说明：</strong> 采用 7x4 分钟阶梯递增，极量力竭。SentrySuite 软件集中控台。</p>
    <table>
        <tr>
            <th width="15%">系统</th>
            <th width="35%">运行参数与采集精度</th>
            <th width="50%">科学数据抓取</th>
        </tr>
        <tr>
            <td class="text-center"><strong>营养代谢<br>(Station 5并行)</strong></td>
            <td>Vyntus Canopy 模块 (文丘里效应 [cite: 125])。自动测量静息 O2/CO2 交换。</td>
            <td>计算静息能量消耗 (REE) 与三大供能营养素比例 [cite: 110, 111]。为营养师提供每日热量基线。</td>
        </tr>
        <tr>
            <td class="text-center"><strong>血流动力学</strong></td>
            <td>Vyntus 12导联蓝牙 ECG (4000Hz采样) + SunTech 运动血压 (DKA三维K氏音抗噪)。</td>
            <td>ST段压低/心律失常排查；血压动态响应；抓取 <strong>氧脉搏 (O2 pulse)</strong> 评估每搏心血输出能力。</td>
        </tr>
        <tr>
            <td class="text-center"><strong>气体代谢</strong></td>
            <td>DVT数字容量传感器 [cite: 14] + 75ms 超快氧气/红外二氧化碳分析器。</td>
            <td>精准锁定 <strong>VO2Max</strong> (相对/绝对)、<strong>通气阈 (VT1/VT2)</strong>。系统自动捕获 VE/VCO2 等斜率诊断效率。</td>
        </tr>
        <tr>
            <td class="text-center"><strong>生化监控</strong></td>
            <td>阶梯间隙 (30s) 耳垂采血，便携式分析仪测定。</td>
            <td>结合气体代谢数据，绘制 <strong>血乳酸-心率-瓦数 曲线</strong>，锁定 2mmol/L 与 4mmol/L 拐点瓦数。</td>
        </tr>
        <tr>
            <td class="text-center"><strong>临床预警</strong></td>
            <td>软件自动化识别流程。</td>
            <td>排查 <strong>EOV (震荡呼吸)</strong>，若出现，强预警过度训练或心室泵血隐患。</td>
        </tr>
    </table>

    <h2 class="station-title">📝 科学转化：测试结果与训练干预处方 (Prescription Matrix)</h2>
    <p style="font-size: 14px; color: #475569; margin-bottom: 20px;">测试数据的最终归宿是指导训练。以下为教练组与科研团队协同出具的科学干预逻辑库。</p>
    <table class="prescription-table">
        <tr>
            <th width="20%">测试结果/短板</th>
            <th width="35%">生理/生物力学成因</th>
            <th width="45%">训练与医学干预指导建议</th>
        </tr>
        <tr>
            <td class="text-center"><span class="badge red">SFMA 阳性</span><br>或 FMS 痛/0分</td>
            <td>存在结构性病变 (JMD) 或神经肌肉控制严重受限 (SMCD)。</td>
            <td><strong>停止负重与专项。</strong> 队医介入，执行手法松解 (Reset)；体能教练应用 4x4 纠正矩阵，从 1x1 (仰卧自重) 开始重塑动作控制 (Retrain)。</td>
        </tr>
        <tr>
            <td class="text-center"><span class="badge yellow">IMTP / 卧拉<br>低于世界标杆</span></td>
            <td>最大力量储备不足或神经募集速率 (RFD) 慢。下肢向躯干传导能量流失。</td>
            <td><strong>开启最大力量/高爆发训练块。</strong> 增加深蹲、硬拉等复合多关节动作；引入 VBT 测速训练 (目标速度 0.75-1.0 m/s)，提高快速发力能力。</td>
        </tr>
        <tr>
            <td class="text-center"><span class="badge gold">VT1 / VT2 瓦数低</span><br>(乳酸曲线左移)</td>
            <td>基础有氧氧化能力弱（线粒体密度低）或糖酵解无氧耐力不足。</td>
            <td><strong>重新划定日常配速区间。</strong><br>• VT1 偏低：增加 LIT (低强度长距离) 训练时间。<br>• VT2 偏低：增加 HIT (高强度间歇) 训练，在 4mmol/L 临界点做阈值巡航。</td>
        </tr>
        <tr>
            <td class="text-center"><span class="badge red">EOV 出现</span><br>或 O2 Pulse 平稳/下降</td>
            <td>外周肌肉提取氧能力达瓶颈，或心肌收缩储备 (每搏输出量) 在高负荷下受限。</td>
            <td><strong>拉响医疗红旗。</strong> 暂停极限训练，安排心脏彩超等医学排查。调整为低负荷恢复性训练，监控睡眠与 HRV (心率变异性) 预防过度训练综合征。</td>
        </tr>
    </table>

</div>`,
    category: '水上竞技',
  },
  {
    title: '国家水上项目：多维运动能力评估与干预标准化指导书 (SOP)',
    content: `<div class="container">
    <div class="header">
        <h1>🥇 精英水上项目测试评估 SOP</h1>
        <div class="subtitle">高水平运动表现与生理生化监控 (Elite Performance Profiling)</div>
    </div>

    <div class="step-card">
        <div class="step-header"><span>📅 50人规模矩阵轮转与人员编组 (5天周期)</span></div>
        <div class="step-content">
            <p><strong>人员统筹：</strong> 1名总控 + 2名医疗人员 (Station 2) + 3名研究生 (Station 1/2) + 2名体能教练 (Station 3) + 3名仪器专家 (Station 4)。</p>
            <p><strong>梯队划分：</strong> 全队50人分为A、B、C、D、E组，每组10人。保证所有代谢测试在无疲劳累积状态下进行，所有测试通过 SentrySuite 软件实现同库管理。</p>
            <table>
                <tr><th>日期</th><th>清晨 (06:30-08:30)</th><th>上午/下午</th><th>全天机动独立测试</th></tr>
                <tr><td class="text-center">Day 1</td><td class="text-center">A组 (空腹REE)</td><td class="text-center">A/B组 (筛查+力量)</td><td class="text-center">--</td></tr>
                <tr><td class="text-center">Day 2</td><td class="text-center">B组 (空腹REE)</td><td class="text-center">C/D组 (筛查+力量)</td><td class="text-center"><span class="highlight-text">A组极限心肺 CPET</span></td></tr>
                <tr><td class="text-center">Day 3</td><td class="text-center">C组 (空腹REE)</td><td class="text-center">E组 (筛查+力量)</td><td class="text-center"><span class="highlight-text">B组极限心肺 CPET</span></td></tr>
                <tr><td class="text-center">Day 4</td><td class="text-center">D组 (空腹REE)</td><td class="text-center">技术录像战术分析</td><td class="text-center"><span class="highlight-text">C组极限心肺 CPET</span></td></tr>
                <tr><td class="text-center">Day 5</td><td class="text-center">E组 (空腹REE)</td><td class="text-center" colspan="2"><span class="highlight-text">D组 & E组极限心肺 CPET 并行处理</span></td></tr>
            </table>
        </div>
    </div>

    <h2 class="station-title">🔬 STATION 1：形态学与静息能量消耗 (REE)</h2>
    <div class="station-meta">
        <strong>🕒 时间：</strong> 清晨空腹状态 | <strong>👥 执行：</strong> 仪器专家 + 研究生<br>
        <strong>🛠️ 设备：</strong> Vyntus CPX (搭载 Canopy 营养代谢模块), DEXA/皮褶计。
    </div>
    <div class="step-card">
        <div class="step-header"><span>操作指令集</span></div>
        <div class="step-content">
            <ul class="action-list">
                <li><strong>组装 Canopy：</strong> 风机不接触受试者呼出气体。为每位运动员更换一次性薄膜，极大降低交叉感染风险。</li>
                <li><strong>执行 REE 测试：</strong> 运动员清晨空腹平躺，待达到稳态条件。系统自动捕捉 VCO2 和 VO2。通过文丘里效应自动测量静息 O2/CO2 交换。</li>
                <li><strong>数据记录：</strong> 基础代谢率 (EE) <span class="input-line"></span> kcal/day，呼吸交换率 (RER，正常约 0.8) <span class="input-line"></span>，碳水/脂肪消耗比。</li>
                <li><strong>形态学记录：</strong> 测量身高、体重、臂展、坐高。采用DEXA或皮褶厚度测体脂。水上项目要求核心杠杆 <strong>猿指数 (>1.03为佳)</strong>。男体脂 8-12%，女 14-18%。</li>
            </ul>
        </div>
    </div>

    <h2 class="station-title">🛑 STATION 2：入口分流与功能筛查 (Triage & FMS)</h2>
    <div class="station-meta">
        <strong>🕒 时间：</strong> 09:00 - 11:30 | <strong>👥 执行：</strong> 队医 + 体育研究生
    </div>
    <div class="step-card">
        <div class="step-header"><span>操作指令集</span></div>
        <div class="step-content">
            <ul class="action-list">
                <li><strong>PAR-Q 问诊：</strong> 疼痛询问与关节红旗病征排查。若有痛，立即脱离大部队，由队医执行 SFMA 顶级评估寻找病灶；无痛则进入下一步 FMS 筛查。</li>
                <li><strong>FMS 基础筛查：</strong> 7项动作模式评估，水上重点关注 ASLR (主动直腿抬高) 与 TSPU (躯干稳定性)。<strong>预警标准：</strong> 总分<14 或存在1分/单侧不对称。</li>
                <li><strong>YBT 下肢动态平衡：</strong> 三方向到达距离测定。左右腿前方伸展差值 > 4cm 列入伤病高危名单。</li>
            </ul>
        </div>
    </div>

    <h2 class="station-title">🏋️ STATION 3：专项神经肌肉与生物力学 (Biomechanics)</h2>
    <div class="station-meta">
        <strong>👥 执行：</strong> 2名体能教练 | <strong>📍 地点：</strong> 力量房
    </div>
    <div class="step-card">
        <div class="step-header"><span>操作指令集</span></div>
        <div class="step-content">
            <ul class="action-list">
                <li><strong>等长收缩大腿中段拉 (IMTP)：</strong> 在测力台上进行，模拟皮划艇/赛艇起航的极限蹬伸。捕获峰值力 (PF) 和发力率 (RFD)。<strong>达标线：</strong> PF > 45 N/kg。</li>
                <li><strong>最大卧拉 (Bench Pull 1RM)：</strong> 使用 VBT (基于速度的训练) 测速仪监控杠铃轨迹。评估上肢后侧链绝对水平拉力。<strong>达标线：</strong> 男 1.3-1.5 倍体重，女 1.1-1.3 倍体重。</li>
                <li><strong>深蹲与硬拉 (Back Squat & Deadlift)：</strong> 杠铃深蹲目标 1.8-2.0 倍体重；硬拉目标 2.0-2.2 倍体重。</li>
                <li><strong>握力与核心抗旋：</strong> Jamar 握力计双侧测试 (双侧握力差 < 10%)；Pallof Press 最大抗阻测定。</li>
            </ul>
        </div>
    </div>

    <h2 class="station-title">🫀 STATION 4：极限心肺与代谢监控 (Elite CPET Lab)</h2>
    <div class="station-meta">
        <strong>👥 执行：</strong> 3名器材与生理学专家 | <strong>🛠️ 核心设备：</strong> 测功仪 (Concept2/Dansprint), Vyntus CPX, SunTech Orbit-K, Vyntus ECG。
    </div>
    <div class="step-card">
        <div class="step-header"><span>步骤 4.1：系统穿戴与定标</span></div>
        <div class="step-content">
            <ul class="action-list">
                <li><strong>全自动容积定标：</strong> 在 SentrySuite 软件点击校准。全自动容积定标仅需 30 秒，无需 3L 定标筒，极其适合 50 人大规模连续作战。</li>
                <li><strong>穿戴 Vyntus ECG：</strong> 重量仅 220g，12导联全系回顾，无引线干扰运动员划船。4000Hz 采样精度。</li>
                <li><strong>穿戴 SunTech 血压袖带：</strong> 佩戴专利 Orbit-K 防滑袖带，开启 DKA (三维K氏音分析) 模式抵抗测功仪震动。</li>
                <li><strong>佩戴气体面罩：</strong> 佩戴面罩与数字式容量传感器 (DVT) 进行每口气数据采集。搭载 75ms 超快氧气/红外二氧化碳分析器。</li>
            </ul>
        </div>
    </div>
    <div class="step-card">
        <div class="step-header"><span>步骤 4.2：核心测试矩阵执行</span></div>
        <div class="step-content">
            <ul class="action-list">
                <li><strong>7×4 阶梯极量测试：</strong> 采用 7x4 分钟阶梯递增，极量力竭。SentrySuite 软件集中控台。</li>
                <li><strong>生化协同：</strong> 每阶间隔 30 秒采集指尖血或耳垂血。结合气体代谢数据，绘制血乳酸-心率-瓦数曲线，锁定 2mmol/L 与 4mmol/L 拐点瓦数。</li>
                <li><strong>专项极限测功仪冲刺：</strong> 10秒峰值功率 (男 > 850W)；1分钟全力冲刺 (男 > 600W)；2000m 赛艇 / 1000m 划艇测试 (男公开级 < 5:50，女公开级 < 6:40)。</li>
                <li><strong>高原低氧模拟 (选配)：</strong> 接入 High/Low FiO2 功能。降低氧浓度 (如 14-15% O2)，在平原实验室内模拟海拔约 2500m 的测功仪竞速，评估缺氧适应性。记录模拟海拔 2500m 完赛时 SpO2 下降百分比。</li>
            </ul>
        </div>
    </div>

    <h2 class="station-title">📝 STATION 5：科学转化与训练干预处方 (Prescription Matrix)</h2>
    <div class="station-meta">
        <strong>核心指示：</strong> 测试数据的最终归宿是指导训练。以下为教练组与科研团队协同出具的科学干预逻辑库。
    </div>
    <table>
        <tr>
            <th width="15%">短板与异常</th>
            <th width="40%">系统自动提取指标与成因</th>
            <th width="45%">训练与医学干预指导建议</th>
        </tr>
        <tr>
            <td class="text-center"><span class="badge gold">通气无氧阈<br>VT1/VT2 瓦数低</span></td>
            <td>SentrySuite 自动利用不同参数确定 VT1, VT2, VT3。成因：基础有氧氧化能力弱或糖酵解无氧耐力不足。</td>
            <td>重新划定日常配速区间。VT1 偏低：增加 LIT (低强度长距离) 训练时间。VT2 偏低：增加 HIT (高强度间歇) 训练，在 4mmol/L 临界点做阈值巡航。</td>
        </tr>
        <tr>
            <td class="text-center"><span class="badge gold">IMTP/卧拉<br>低于标杆</span></td>
            <td>最大力量储备不足或神经募集速率 (RFD) 慢。下肢向躯干传导能量流失。</td>
            <td>开启最大力量/高爆发训练块。增加深蹲、硬拉等复合多关节动作；引入 VBT 测速训练 (目标速度 0.75-1.0 m/s)。</td>
        </tr>
        <tr>
            <td class="text-center"><span class="badge red">SFMA 阳性或<br>FMS 痛/0分</span></td>
            <td>存在结构性病变 (JMD) 或神经肌肉控制严重受限 (SMCD)。</td>
            <td>停止负重与专项。队医介入，执行手法松解 (Reset)；体能教练应用 4x4 纠正矩阵，从 1x1 (仰卧自重) 开始重塑动作控制 (Retrain)。</td>
        </tr>
        <tr>
            <td class="text-center"><span class="badge red">出现 EOV 或<br>O2 Pulse平稳/下降</span></td>
            <td>Vyntus CPX 具备 EOV 自动识别功能。成因：心肌收缩储备在高负荷下受限。阳性预示极高心衰/过度训练风险。</td>
            <td>拉响医疗红旗。暂停极限训练，安排心脏彩超等医学排查。调整为低负荷恢复性训练，监控睡眠与 HRV (心率变异性) 预防过度训练综合征。</td>
        </tr>
    </table>

    <div style="margin-top: 50px; text-align: center; color: var(--text-light); font-size: 12px; border-top: 1px solid var(--border-color); padding-top: 20px;">
        <p>基于顶级生理生化监控设备与临床科研规范体系集成 · 供内部团队严格受控执行</p>
    </div>
</div>`,
    category: '水上竞技',
  },
  {
    title: 'STATION 1: 形态学与静息能量消耗 (REE) SOP',
    content: `<div class="container">
    <div class="header">
        <div class="station-number">01</div>
        <div class="header-text">
            <h1>形态学与静息能量消耗 (REE)</h1>
            <p>Anthropometric & Resting Metabolic Rate Profiling</p>
        </div>
    </div>

    <div class="meta-bar">
        <div class="meta-item"><strong>🕒 执行时间：</strong> 06:30 - 08:30 (必须空腹)</div>
        <div class="meta-item"><strong>👥 岗位配置：</strong> 仪器专家 1名 + 体育研究生 1名</div>
        <div class="meta-item"><strong>📍 地点：</strong> 恒温生理实验室 (静音环境)</div>
    </div>

    <div class="step-block">
        <div class="step-title">步骤 1：开机与设备检查 (开测前 20 分钟执行)</div>
        <div class="action-box">
            <label class="action-row">
                <div class="action-checkbox"><input type="checkbox"></div>
                <div class="action-detail">
                    <strong>启动 Vyntus CPX：</strong> 打开主机电源，观察前面板状态灯。确认指示灯呈 <span style="color:#0ea5e9; font-weight:bold;">蓝色常亮</span>（系统就绪）。
                </div>
            </label>
            <label class="action-row">
                <div class="action-checkbox"><input type="checkbox"></div>
                <div class="action-detail">
                    <strong>Canopy 模块组装 [cite: 128, 129]：</strong> 确认风机电源接入。安装可拆卸硅胶插入孔 [cite: 134]，并接入全新过滤器（保护下游部件）[cite: 135]。
                </div>
            </label>
            <label class="action-row">
                <div class="action-checkbox"><input type="checkbox"></div>
                <div class="action-detail">
                    <strong>SentrySuite 软件初始化：</strong> 登录系统，打开“自动预填充启动菜单”，确认 Canopy 及气流模块连接无报错。
                </div>
            </label>
        </div>
    </div>

    <div class="step-block">
        <div class="step-title">步骤 2：形态学数据采集 (研究生执行)</div>
        <div class="action-box">
            <label class="action-row">
                <div class="action-checkbox"><input type="checkbox"></div>
                <div class="action-detail">
                    <strong>受试者检录：</strong> 核对姓名、确认绝对空腹（禁食10-12小时，禁晨练），排空大小便。
                </div>
            </label>
            <label class="action-row">
                <div class="action-checkbox"><input type="checkbox"></div>
                <div class="action-detail">
                    <strong>基础与杠杆测量：</strong> 使用精准身高体重仪测量。使用皮尺精准测量最大臂展与坐高。
                </div>
            </label>
            <label class="action-row">
                <div class="action-checkbox"><input type="checkbox"></div>
                <div class="action-detail">
                    <strong>身体成分：</strong> 执行 DEXA 扫描 或 ISAK 标准8点皮褶厚度推算，得出体脂率。
                </div>
            </label>
        </div>

        <div class="data-capture">
            <strong>📋 形态学数据录入板</strong>
            <div class="data-grid">
                <div class="data-item"><span>身高 (Height):</span> <div><input type="text" class="input-line"> cm</div></div>
                <div class="data-item"><span>体重 (Weight):</span> <div><input type="text" class="input-line"> kg</div></div>
                <div class="data-item"><span>臂展 (Wingspan):</span> <div><input type="text" class="input-line"> cm</div></div>
                <div class="data-item"><span>坐高 (Sitting Ht):</span> <div><input type="text" class="input-line"> cm</div></div>
                <div class="data-item"><span>体脂率 (Body Fat):</span> <div><input type="text" class="input-line"> %</div></div>
                <div class="data-item" style="grid-column: 1 / -1; background: #fef08a; padding: 10px; border-radius: 4px;">
                    <span>猿指数 (臂展÷身高):</span> 
                    <div><input type="text" class="input-line" style="width: 80px;"> <i style="font-size:12px; color:#1e293b;">(水上强队标杆 > 1.03)</i></div>
                </div>
            </div>
        </div>
    </div>

    <div class="step-block">
        <div class="step-title">步骤 3：REE 代谢测试执行 (仪器专家执行)</div>
        <div class="action-box">
            <label class="action-row">
                <div class="action-checkbox"><input type="checkbox"></div>
                <div class="action-detail">
                    <strong>患者体位：</strong> 引导运动员在检查床上静卧休息 10 分钟，保持环境绝对安静。
                </div>
            </label>
            <label class="action-row">
                <div class="action-checkbox"><input type="checkbox"></div>
                <div class="action-detail">
                    <strong>佩戴 Canopy 头罩：</strong> 拆封全新一次性薄膜（确保一人一换，杜绝交叉感染 [cite: 132]）。将不锈钢支架置于薄膜外部 [cite: 133]，笼罩受试者头部并收紧领口。
                </div>
            </label>
            <label class="action-row">
                <div class="action-checkbox"><input type="checkbox"></div>
                <div class="action-detail">
                    <strong>启动分析：</strong> 在软件中点击开始。基于文丘里效应 [cite: 125]，调节稀释泵流速（25 - 80 L/min）[cite: 124]，确保头罩内无雾气冷凝。
                </div>
            </label>
            <label class="action-row">
                <div class="action-checkbox"><input type="checkbox"></div>
                <div class="action-detail">
                    <strong>稳态监控与截取：</strong> 监测测试约 15-20 分钟，直到 SentrySuite 软件提示达到 <strong>稳态条件 (Steady-state)</strong> [cite: 103]。截取稳态区间。
                </div>
            </label>
        </div>

        <div class="data-capture">
            <strong>📋 REE 生理数据录入板 (导入运动员管理系统 AMS)</strong>
            <span class="warning-text">※ 营养师将依此数据制定冬训每日热量基线</span>
            <div class="data-grid">
                <div class="data-item"><span>静息能量消耗 (EE):</span> <div><input type="text" class="input-line"> kcal/day</div></div>
                <div class="data-item"><span>呼吸交换率 (RER):</span> <div><input type="text" class="input-line"> <i style="font-size:12px; font-weight:normal;">(约 0.8)</i></div></div>
                <div class="data-item"><span>碳水化合物占比:</span> <div><input type="text" class="input-line"> %</div></div>
                <div class="data-item"><span>脂肪消耗占比:</span> <div><input type="text" class="input-line"> %</div></div>
            </div>
        </div>
    </div>

    <div style="margin-top: 40px; border-top: 2px dashed var(--border-color); padding-top: 20px; display: flex; justify-content: space-between; font-size: 15px;">
        <div><strong>仪器专家确认：</strong> __________________</div>
        <div><strong>测试日期：</strong> ____年__月__日</div>
    </div>
</div>`,
    category: '水上竞技',
  },
  {
    title: 'STATION 2: 医学分流与功能动作筛查 (Triage & FMS) SOP',
    content: `<div class="container">
    <div class="header">
        <div class="station-number">02</div>
        <div class="header-text">
            <h1>医学分流与功能动作筛查</h1>
            <p>Medical Triage & Functional Movement Screen (FMS/YBT)</p>
        </div>
    </div>

    <div class="meta-bar">
        <div class="meta-item"><strong>🕒 执行时间：</strong> 09:00 - 11:30</div>
        <div class="meta-item"><strong>👥 岗位配置：</strong> 队医 1名 + 体育研究生 2名</div>
        <div class="meta-item"><strong>📍 地点：</strong> 康复室 / 室内力量房</div>
    </div>

    <div class="step-block">
        <div class="step-title">步骤 1：PAR-Q 问诊与红旗分流 (队医执裁)</div>
        <div class="action-box">
            <label class="action-row">
                <div class="action-checkbox"><input type="checkbox"></div>
                <div class="action-detail">
                    <strong>入口问询：</strong> 向运动员口头确认：“目前是否有任何静息痛、运动发力痛，或医生叮嘱未愈合的伤病？”
                </div>
            </label>
            <label class="action-row">
                <div class="action-checkbox"><input type="checkbox"></div>
                <div class="action-detail">
                    <strong>红灯阻断逻辑 (<span class="badge red">有痛</span>)：</strong> 立即令其脱离大部队排期。由队医接管，执行 SFMA (选择性功能动作评估) 顶级测试寻找无痛功能障碍 (DN) 作为突破口。<strong>禁止该运动员进入今日极量负荷测试。</strong>
                </div>
            </label>
            <label class="action-row">
                <div class="action-checkbox"><input type="checkbox"></div>
                <div class="action-detail">
                    <strong>绿灯放行 (<span class="badge green">无痛</span>)：</strong> 确认状态安全，交由研究生团队进行 FMS 功能动作筛查。
                </div>
            </label>
        </div>
    </div>

    <div class="step-block">
        <div class="step-title">步骤 2：FMS 动作筛查执行 (研究生执裁)</div>
        <div class="action-box">
            <label class="action-row">
                <div class="action-checkbox"><input type="checkbox"></div>
                <div class="action-detail">
                    <strong>排除性测试：</strong> 优先执行肩撞击、脊柱伸展、脊柱屈曲测试。<strong>警告：如遇疼痛，对应主项记0分，立即退回交予队医！</strong>
                </div>
            </label>
            <label class="action-row">
                <div class="action-checkbox"><input type="checkbox"></div>
                <div class="action-detail">
                    <strong>7项测试执行：</strong> 严格按照 3分/2分/1分 标准打分。双侧测试取最低分为该项得分。水上项目需重点盯防 <strong>ASLR (主动直腿抬高)</strong> 与 <strong>TSPU (躯干稳定性)</strong>。
                </div>
            </label>
        </div>

        <div class="data-capture">
            <strong>📋 FMS 现场评分录入板 (AMS)</strong>
            <table class="score-table">
                <tr>
                    <th width="35%">测试项目 (0-3分)</th>
                    <th width="15%">左侧 (L)</th>
                    <th width="15%">右侧 (R)</th>
                    <th width="15%">最终得分</th>
                    <th width="20%">排除测试结果</th>
                </tr>
                <tr>
                    <td class="text-left">1. 深蹲 (Deep Squat)</td>
                    <td>-</td><td>-</td>
                    <td><input type="text" class="input-box"></td>
                    <td>无</td>
                </tr>
                <tr>
                    <td class="text-left">2. 跨栏架步 (Hurdle Step)</td>
                    <td><input type="text" class="input-box"></td>
                    <td><input type="text" class="input-box"></td>
                    <td><input type="text" class="input-box"></td>
                    <td>无</td>
                </tr>
                <tr>
                    <td class="text-left">3. 直线弓箭步 (In-Line Lunge)</td>
                    <td><input type="text" class="input-box"></td>
                    <td><input type="text" class="input-box"></td>
                    <td><input type="text" class="input-box"></td>
                    <td>无</td>
                </tr>
                <tr>
                    <td class="text-left">4. 肩关节灵活性 (Shoulder Mob.)</td>
                    <td><input type="text" class="input-box"></td>
                    <td><input type="text" class="input-box"></td>
                    <td><input type="text" class="input-box"></td>
                    <td>痛[ ] 无痛[ ]</td>
                </tr>
                <tr>
                    <td class="text-left">5. 主动直腿抬高 (ASLR)</td>
                    <td><input type="text" class="input-box"></td>
                    <td><input type="text" class="input-box"></td>
                    <td><input type="text" class="input-box"></td>
                    <td>无</td>
                </tr>
                <tr>
                    <td class="text-left">6. 躯干稳定性俯卧撑 (TSPU)</td>
                    <td>-</td><td>-</td>
                    <td><input type="text" class="input-box"></td>
                    <td>痛[ ] 无痛[ ]</td>
                </tr>
                <tr>
                    <td class="text-left">7. 旋转稳定性 (Rotary Stab.)</td>
                    <td><input type="text" class="input-box"></td>
                    <td><input type="text" class="input-box"></td>
                    <td><input type="text" class="input-box"></td>
                    <td>痛[ ] 无痛[ ]</td>
                </tr>
                <tr>
                    <td colspan="3" style="text-align: right; font-weight: bold; color: var(--primary);">总分 (Max: 21)</td>
                    <td colspan="2" style="text-align: left; font-size: 18px; font-weight: bold;"><input type="text" class="input-line" style="width:40px;"> /21</td>
                </tr>
            </table>
            <div style="font-size:13px; color:var(--text-light); margin-top:8px;">
                <span class="badge yellow">预警线</span> 若总分 < 14分，或出现单侧 1-3 不对称，须在档案标注红旗，提示体能教练限制大重量负重。
            </div>
        </div>
    </div>

    <div class="step-block">
        <div class="step-title">步骤 3：YBT 下肢动态平衡测试 (研究生执行)</div>
        <div class="action-box">
            <label class="action-row">
                <div class="action-checkbox"><input type="checkbox"></div>
                <div class="action-detail">
                    <strong>肢长测量：</strong> 运动员仰卧，使用卷尺测量从 ASIS (髂前上棘) 到同侧内踝的最短距离，精确到 0.5cm。
                </div>
            </label>
            <label class="action-row">
                <div class="action-checkbox"><input type="checkbox"></div>
                <div class="action-detail">
                    <strong>执行推送：</strong> 运动员单腿赤脚站立于中心点。用非支撑腿推动滑块。双手必须始终叉腰，推完后必须能受控收回姿势。每个方向练习 3 次，记录最好成绩。
                </div>
            </label>
        </div>

        <div class="data-capture">
            <strong>📋 YBT-LQ 数据录入板 (AMS)</strong>
            <table class="score-table">
                <tr>
                    <th width="30%">测试方向</th>
                    <th width="20%">左腿支撑 (cm)</th>
                    <th width="20%">右腿支撑 (cm)</th>
                    <th width="30%">左右不对称差值 (cm)</th>
                </tr>
                <tr>
                    <td class="text-left">肢体长度 (Limb Length)</td>
                    <td><input type="text" class="input-box" style="width:60px;"></td>
                    <td><input type="text" class="input-box" style="width:60px;"></td>
                    <td>-</td>
                </tr>
                <tr>
                    <td class="text-left">Anterior (前方伸展)</td>
                    <td><input type="text" class="input-box" style="width:60px;"></td>
                    <td><input type="text" class="input-box" style="width:60px;"></td>
                    <td><input type="text" class="input-line" style="width:50px;"> <span style="font-size:12px; color:var(--red);">* >4cm 高危</span></td>
                </tr>
                <tr>
                    <td class="text-left">Posteromedial (内后方)</td>
                    <td><input type="text" class="input-box" style="width:60px;"></td>
                    <td><input type="text" class="input-box" style="width:60px;"></td>
                    <td><input type="text" class="input-line" style="width:50px;"></td>
                </tr>
                <tr>
                    <td class="text-left">Posterolateral (外后方)</td>
                    <td><input type="text" class="input-box" style="width:60px;"></td>
                    <td><input type="text" class="input-box" style="width:60px;"></td>
                    <td><input type="text" class="input-line" style="width:50px;"></td>
                </tr>
                <tr style="background-color: #f1f5f9;">
                    <td class="text-left" style="font-weight:bold; color:var(--primary);">综合得分 (Composite %)</td>
                    <td style="font-weight:bold;"><input type="text" class="input-line" style="width:50px;"> %</td>
                    <td style="font-weight:bold;"><input type="text" class="input-line" style="width:50px;"> %</td>
                    <td>-</td>
                </tr>
            </table>
            <div style="font-size:12px; color:var(--text-light); margin-top:8px;">
                计算公式: Composite % = [(前方 + 内后 + 外后) / (3 × 肢体长度)] × 100
            </div>
        </div>
    </div>

    <div style="margin-top: 40px; border-top: 2px dashed var(--border-color); padding-top: 20px; display: flex; justify-content: space-between; font-size: 15px;">
        <div><strong>队医分流确认签字：</strong> __________________</div>
        <div><strong>筛查执行人签字：</strong> __________________</div>
    </div>
</div>`,
    category: '水上竞技',
  },
  {
    title: 'STATION 3: 专项神经肌肉与生物力学 (Biomechanics) SOP',
    content: `<div class="container">
    <div class="header">
        <div class="station-number">03</div>
        <div class="header-text">
            <h1>专项神经肌肉与生物力学</h1>
            <p>Neuromuscular & Biomechanics Profiling</p>
        </div>
    </div>

    <div class="meta-bar">
        <div class="meta-item"><strong>🕒 执行时间：</strong> 09:00 - 11:30 (与 Station 2 并行)</div>
        <div class="meta-item"><strong>👥 岗位配置：</strong> 体能教练 2名</div>
        <div class="meta-item"><strong>📍 地点：</strong> 力量房 (Weight Room)</div>
    </div>

    <div class="step-block">
        <div class="step-title">步骤 1：等长收缩大腿中段拉 (IMTP)</div>
        <div class="action-box">
            <label class="action-row">
                <div class="action-checkbox"><input type="checkbox"></div>
                <div class="action-detail">
                    <strong>测力台校准：</strong> 运动员上台前，确保双侧测力台 (Force Plate) 归零。连接数据采集终端。
                </div>
            </label>
            <label class="action-row">
                <div class="action-checkbox"><input type="checkbox"></div>
                <div class="action-detail">
                    <strong>姿势标定：</strong> 使用量角器标定发力姿态。膝关节角度控制在 <span class="highlight-text">125° - 130°</span>，髋关节角度控制在 <span class="highlight-text">140° - 145°</span>。将固定杠铃杆调节至对应高度，运动员双手使用助力带绑紧杠铃。
                </div>
            </label>
            <label class="action-row">
                <div class="action-checkbox"><input type="checkbox"></div>
                <div class="action-detail">
                    <strong>测试指令：</strong> 下达指令：“3, 2, 1, 拉！”。要求运动员以最快速度爆发出最大力量，保持 3-5 秒。执行 2-3 组，组间休息 2 分钟，取最高峰值力。
                </div>
            </label>
        </div>
    </div>

    <div class="step-block">
        <div class="step-title">步骤 2：最大卧拉与下肢绝对力量 (VBT 监控)</div>
        <div class="action-box">
            <label class="action-row">
                <div class="action-checkbox"><input type="checkbox"></div>
                <div class="action-detail">
                    <strong>外设安装：</strong> 将线性位移/阻力传感器垂直悬挂固定于杠铃杆中央。确保线缆拉伸与回缩顺畅，以便精准捕获向心阶段的平均速度 (Mean Velocity) 与做功数据。
                </div>
            </label>
            <label class="action-row">
                <div class="action-checkbox"><input type="checkbox"></div>
                <div class="action-detail">
                    <strong>最大卧拉 (Bench Pull)：</strong> 运动员俯卧于高板凳。从约 50% 估计 1RM 开始，每次递增 5-10kg。当 VBT 传感器显示的向心速度 <strong>低于 0.3 m/s</strong> 或无法触及卧推凳底部时，测试终止。记录上一成功重量。
                </div>
            </label>
            <label class="action-row">
                <div class="action-checkbox"><input type="checkbox"></div>
                <div class="action-detail">
                    <strong>深蹲/硬拉 (Squat/Deadlift)：</strong> 采用相同的 VBT 递增流程测定下肢绝对力量。要求动作全程收紧核心，严禁弓背。
                </div>
            </label>
        </div>
    </div>

    <div class="step-block">
        <div class="step-title">步骤 3：核心抗旋与桨面控制力 (末端力量)</div>
        <div class="action-box">
            <label class="action-row">
                <div class="action-checkbox"><input type="checkbox"></div>
                <div class="action-detail">
                    <strong>双侧握力测试 (Jamar)：</strong> 站姿，手臂自然下垂。交替测试左、右两手，各测试 3 次取最大值。评估左右侧桨面控制平衡度。
                </div>
            </label>
            <label class="action-row">
                <div class="action-checkbox"><input type="checkbox"></div>
                <div class="action-detail">
                    <strong>Pallof Press (抗旋推升)：</strong> 设定阻力设备，侧对拉力源，双手于胸前将线缆推出。评估核心抗扭转极限阻力（记录不发生代偿代旋的最大磅数）。
                </div>
            </label>
        </div>

        <div class="data-capture">
            <strong>📋 生物力学数据录入板 (AMS)</strong>
            <table class="score-table">
                <tr>
                    <th width="30%">测试项目</th>
                    <th width="20%">实测数据</th>
                    <th width="20%">体重 (BW) / 相对比</th>
                    <th width="30%">达标参考线</th>
                </tr>
                <tr>
                    <td class="text-left">IMTP 峰值拉力</td>
                    <td><input type="text" class="input-box"> N</td>
                    <td><input type="text" class="input-line" style="width:40px;"> N/kg</td>
                    <td>> 45 N/kg</td>
                </tr>
                <tr>
                    <td class="text-left">最大卧拉 (Bench Pull)</td>
                    <td><input type="text" class="input-box"> KG</td>
                    <td><input type="text" class="input-line" style="width:40px;"> 倍 BW</td>
                    <td>男 1.3-1.5x / 女 1.1-1.3x</td>
                </tr>
                <tr>
                    <td class="text-left">杠铃深蹲 (Back Squat)</td>
                    <td><input type="text" class="input-box"> KG</td>
                    <td><input type="text" class="input-line" style="width:40px;"> 倍 BW</td>
                    <td>1.8 - 2.0x 倍 BW</td>
                </tr>
                <tr>
                    <td class="text-left">传统硬拉 (Deadlift)</td>
                    <td><input type="text" class="input-box"> KG</td>
                    <td><input type="text" class="input-line" style="width:40px;"> 倍 BW</td>
                    <td>2.0 - 2.2x 倍 BW</td>
                </tr>
                <tr>
                    <td class="text-left">左手最大握力</td>
                    <td><input type="text" class="input-box"> KG</td>
                    <td rowspan="2" style="vertical-align: middle;">差值: <input type="text" class="input-line" style="width:30px;"> %</td>
                    <td rowspan="2" style="vertical-align: middle;">双侧差异 < 10%</td>
                </tr>
                <tr>
                    <td class="text-left" style="border-top: none;">右手最大握力</td>
                    <td style="border-top: none;"><input type="text" class="input-box"> KG</td>
                </tr>
                <tr>
                    <td class="text-left">Pallof 抗旋推升</td>
                    <td colspan="2">左: <input type="text" class="input-line" style="width:40px;"> 磅 / 右: <input type="text" class="input-line" style="width:40px;"> 磅</td>
                    <td>无代偿、骨盆中立</td>
                </tr>
            </table>
        </div>
    </div>

    <div style="margin-top: 40px; border-top: 2px dashed var(--border-color); padding-top: 20px; display: flex; justify-content: space-between; font-size: 15px;">
        <div><strong>体能教练 (主测) 签字：</strong> __________________</div>
        <div><strong>记录员签字：</strong> __________________</div>
    </div>
</div>`,
    category: '水上竞技',
  },
  {
    title: 'STATION 4: 极限心肺与代谢监控 (Elite CPET Lab) SOP',
    content: `<div class="container">
    <div class="header">
        <div class="station-number">04</div>
        <div class="header-text">
            <h1>极限心肺与代谢监控</h1>
            <p>Elite CPET, ECG & Hemodynamic Lab</p>
        </div>
    </div>

    <div class="meta-bar">
        <div class="meta-item"><strong>🕒 执行时间：</strong> 全天独立机动排期 (约45分钟/人)</div>
        <div class="meta-item"><strong>👥 岗位配置：</strong> 仪器专家 2名 + 队医 1名 (负责采血)</div>
        <div class="meta-item"><strong>🛠️ 核心设备：</strong> Vyntus CPX [cite: 3], Vyntus ECG[cite: 51], SunTech BP, Concept2/Dansprint</div>
    </div>

    <div class="step-block">
        <div class="step-title">步骤 1：系统预调与全自动校准 (仪器专家)</div>
        <div class="action-box">
            <label class="action-row">
                <div class="action-checkbox"><input type="checkbox"></div>
                <div class="action-detail">
                    <strong>环境与气体定标：</strong> 开启 Vyntus CPX。系统内置温度、压力传感器进行实时 BTPS 补偿，气体定标采用单点自动定标 [cite: 2]。面板指示灯显示 <span class="highlight-text">蓝色常亮</span> 代表就绪 [cite: 183]。
                </div>
            </label>
            <label class="action-row">
                <div class="action-checkbox"><input type="checkbox"></div>
                <div class="action-detail">
                    <strong>全自动容积定标：</strong> 在 SentrySuite 软件点击容量定标。<strong>无需手动推拉 3L 定标筒</strong> [cite: 2, 169]，系统内置全自动校准模块，30秒内即可通过测试 [cite: 171]。
                </div>
            </label>
            <label class="action-row">
                <div class="action-checkbox"><input type="checkbox"></div>
                <div class="action-detail">
                    <strong>预设方案加载：</strong> 在同一 SentrySuite 软件界面加载 CPET、心电与血压联动模块 [cite: 2]。调出水上项目专属的 <span class="highlight-text">7 × 4 分钟测功仪阶梯递增方案</span>。
                </div>
            </label>
        </div>
    </div>

    <div class="step-block">
        <div class="step-title">步骤 2：穿戴与信号核对 (全员协同)</div>
        <div class="action-box">
            <label class="action-row">
                <div class="action-checkbox"><input type="checkbox"></div>
                <div class="action-detail">
                    <strong>12导联心电连接：</strong> 为运动员贴装电极。连接重量仅 220g 的 Vyntus 蓝牙 ECG 发射器 [cite: 53]。检查导联线接头 LED 指示灯：亮 <span class="highlight-text" style="color:#059669;">绿灯</span> 代表阻抗正常连接成功 [cite: 64]。
                </div>
            </label>
            <label class="action-row">
                <div class="action-checkbox"><input type="checkbox"></div>
                <div class="action-detail">
                    <strong>运动血压佩戴：</strong> 为运动员左臂佩戴专利 Orbit-K 防滑袖带 [cite: 2]。确认软件开启了 <strong>DKA（三维K氏音分析）运动模式</strong> 以抵抗测功仪带来的强震动噪音 [cite: 2]。
                </div>
            </label>
            <label class="action-row">
                <div class="action-checkbox"><input type="checkbox"></div>
                <div class="action-detail">
                    <strong>佩戴面罩与 DVT：</strong> 佩戴面罩并连接数字式容量传感器 (DVT)。注意将 DVT 的细网筛一侧朝向患者面部 [cite: 32]，连接采样管。
                </div>
            </label>
        </div>
    </div>

    <div class="step-block">
        <div class="step-title">步骤 3：7×4 阶梯极量测试执行</div>
        <div class="action-box">
            <label class="action-row">
                <div class="action-checkbox"><input type="checkbox"></div>
                <div class="action-detail">
                    <strong>启动采集：</strong> 软件点击开始，主机指示灯变为 <span class="highlight-text" style="color:#059669;">绿色常亮</span> [cite: 185]。屏幕左侧监视 9-Panel (Wasserman-9 图) [cite: 2, 75]。
                </div>
            </label>
            <label class="action-row">
                <div class="action-checkbox"><input type="checkbox"></div>
                <div class="action-detail">
                    <strong>指尖/耳垂采血 (队医)：</strong> <strong>每阶梯结束前 30 秒</strong>，队医采集耳垂血，滴入便携式乳酸分析仪，仪器专家将读数记入软件事件标记。
                </div>
            </label>
            <label class="action-row">
                <div class="action-checkbox"><input type="checkbox"></div>
                <div class="action-detail">
                    <strong>主观疲劳录入：</strong> 每一阶梯，按键盘 <span class="badge-key">F7</span> 键呼出 RPE 窗口 [cite: 101]。询问运动员疲劳度并录入 6-20 分级量表。
                </div>
            </label>
        </div>
    </div>

    <div class="step-block">
        <div class="step-title">步骤 4：恢复期监控与高原低氧模拟 (可选)</div>
        <div class="action-box">
            <label class="action-row">
                <div class="action-checkbox"><input type="checkbox"></div>
                <div class="action-detail">
                    <strong>恢复期追踪：</strong> 运动员力竭停止蹬踏后，要求保持平稳呼吸 3-5 分钟。系统将自动计算 <strong>VO2 T1/2 (摄氧量恢复半衰期)</strong> [cite: 210]。
                </div>
            </label>
            <label class="action-row">
                <div class="action-checkbox"><input type="checkbox"></div>
                <div class="action-detail">
                    <strong>High/Low FiO2 模块 (选配)：</strong> 若需测试缺氧适应性，连接低氧模块。在软件中设定降低氧浓度至 <strong>14-15% O2</strong> [cite: 142]，以模拟海拔约 2500m 气压环境 [cite: 158]。
                </div>
            </label>
        </div>

        <div class="data-capture">
            <strong>📋 极限心肺与代谢核心数据提取 (入库 AMS)</strong>
            <table class="score-table">
                <tr>
                    <th width="30%">生理测试指标</th>
                    <th width="20%">实测数据</th>
                    <th width="20%">体重复合比</th>
                    <th width="30%">对应功率/负荷</th>
                </tr>
                <tr>
                    <td class="text-left">最大摄氧量 (VO2Max)</td>
                    <td><input type="text" class="input-box"> L/min</td>
                    <td><input type="text" class="input-line" style="width:40px;"> mL/kg</td>
                    <td>Max: <input type="text" class="input-line" style="width:40px;"> W</td>
                </tr>
                <tr>
                    <td class="text-left">无氧阈 (LT2 / 4mmol/L)</td>
                    <td><input type="text" class="input-box"> bpm</td>
                    <td><input type="text" class="input-line" style="width:40px;"> mmol</td>
                    <td>LT2: <input type="text" class="input-line" style="width:40px;"> W</td>
                </tr>
                <tr>
                    <td class="text-left">第一通气阈 (VT1)</td>
                    <td><input type="text" class="input-box"> bpm</td>
                    <td>-</td>
                    <td>VT1: <input type="text" class="input-line" style="width:40px;"> W</td>
                </tr>
                <tr>
                    <td class="text-left">最大氧脉搏 (O2 Pulse)</td>
                    <td><input type="text" class="input-box"> mL/beat</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td class="text-left">VO2 T1/2 恢复半衰期</td>
                    <td><input type="text" class="input-box" style="width:80px;"> min</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
            </table>
        </div>
    </div>

    <div style="margin-top: 40px; border-top: 2px dashed var(--border-color); padding-top: 20px; display: flex; justify-content: space-between; font-size: 15px;">
        <div><strong>仪器专家确认签字：</strong> __________________</div>
        <div><strong>医疗采血确认签字：</strong> __________________</div>
    </div>
</div>`,
    category: '水上竞技',
  },
  {
    title: 'STATION 5: 数据解析与训练干预处方 SOP',
    content: `<div class="container">
    <div class="header">
        <div class="station-number">05</div>
        <div class="header-text">
            <h1>数据解析与训练干预处方</h1>
            <p>Data Analysis & Training Prescription Matrix</p>
        </div>
    </div>

    <div class="meta-bar">
        <div class="meta-item"><strong>🕒 执行时间：</strong> 每日测试结束后 / 集中复盘日</div>
        <div class="meta-item"><strong>👥 岗位配置：</strong> 主教练 + 医疗主管 + 科研总控</div>
        <div class="meta-item"><strong>🛠️ 核心平台：</strong> SentrySuite 数据库 + 运动员管理系统 (AMS)</div>
    </div>

    <div class="step-block">
        <div class="step-title">步骤 1：医疗红旗与退赛预警复核 (医疗主管)</div>
        <div class="action-box">
            <label class="action-row">
                <div class="action-checkbox"><input type="checkbox"></div>
                <div class="action-detail">
                    <strong>结构性损伤确认：</strong> 调取 Station 2 的 PAR-Q 与 FMS 排除性测试结果。凡标记为 <span class="highlight-text">SFMA 阳性 (有痛)</span> 的运动员，由队医直接开具康复处方，禁止其参与下一阶段的专项大负荷水上训练。
                </div>
            </label>
            <label class="action-row">
                <div class="action-checkbox"><input type="checkbox"></div>
                <div class="action-detail">
                    <strong>过度训练与心血管风险排查：</strong> 调取 Station 4 (CPET) 报告。核对 SentrySuite 软件是否触发 <strong>EOV (震荡呼吸)</strong> 警报，并检视最大负荷下的 <strong>氧脉搏 (O2 Pulse)</strong> 曲线是否出现异常平台期或下降。若发现异常，立即下达心脏彩超等转介排查指令。
                </div>
            </label>
        </div>
    </div>

    <div class="step-block">
        <div class="step-title">步骤 2：有氧/无氧阈值划定与配速重构 (科研总控)</div>
        <div class="action-box">
            <label class="action-row">
                <div class="action-checkbox"><input type="checkbox"></div>
                <div class="action-detail">
                    <strong>基线代谢提取：</strong> 将 Station 1 的 REE (静息能量消耗) 数据推转给随队营养师，重新校准重点运动员冬训期间的每日碳水与蛋白质摄入基线。
                </div>
            </label>
            <label class="action-row">
                <div class="action-checkbox"><input type="checkbox"></div>
                <div class="action-detail">
                    <strong>心肺阈值锁定：</strong> 在 SentrySuite 中利用 V-Slope (V-斜率法) 和 EQO2 (通气当量法) 确认 <strong>VT1 (第一通气阈)</strong> 和 <strong>VT2 (第二通气阈)</strong>。交叉比对 2mmol/L 与 4mmol/L 血乳酸拐点。
                </div>
            </label>
            <label class="action-row">
                <div class="action-checkbox"><input type="checkbox"></div>
                <div class="action-detail">
                    <strong>下发训练区间 (Training Zones)：</strong> 将 VT1 和 VT2 对应的 <strong>测功仪瓦数 (W) 和心率 (bpm)</strong> 录入 AMS 系统，作为该运动员未来 6 周训练的绝对监控指标。
                </div>
            </label>
        </div>
    </div>

    <div class="step-block">
        <div class="step-title">步骤 3：弱点分析与体能处方开具 (主教练)</div>
        
        <div class="data-capture">
            <strong>📋 科学干预指令库 (Actionable Prescriptions)</strong>
            <table class="score-table">
                <tr>
                    <th width="20%">诊断短板</th>
                    <th width="35%">生理与生物力学成因</th>
                    <th width="45%">定向训练指令 (向教练组下达)</th>
                </tr>
                <tr>
                    <td><span class="badge gold">VT1 瓦数偏低</span><br>(乳酸曲线左移)</td>
                    <td>基础有氧氧化能力弱（线粒体密度及毛细血管网不足）。</td>
                    <td><strong>严控恢复游配速：</strong> 增加 LIT (低强度长距离) 训练占比。明确要求在 U2/U1 训练区时，<strong>心率和瓦数绝对不可超过 VT1 极值</strong>，避免无谓的糖原消耗和乳酸堆积。</td>
                </tr>
                <tr>
                    <td><span class="badge gold">VT2 瓦数偏低</span><br>(VO2Max 瓶颈)</td>
                    <td>糖酵解无氧耐力不足，乳酸清除率低下。</td>
                    <td><strong>增加阈值巡航训练：</strong> 安排基于 VT2 瓦数 (约 4mmol/L 临界点) 的高强度间歇 (HIT)。例如执行 4×4分钟 或 6×2分钟 的测功仪 AT 区间测验。</td>
                </tr>
                <tr>
                    <td><span class="badge green">VO2 T1/2 恢复慢</span><br>(心率降幅极小)</td>
                    <td>迷走神经张力恢复慢，疲劳清除机制受损。</td>
                    <td><strong>强化间歇恢复：</strong> 在水上专项课中，延长高强度冲刺后的组间主动恢复时间。考虑辅以冷热浴或压缩衣促进循环。</td>
                </tr>
                <tr>
                    <td><span class="badge red">卧拉 1RM 达标<br>但 IMTP PF 低</span></td>
                    <td>最大力量 (Max Strength) 足够，但神经募集速率 (RFD - Rate of Force Development) 迟缓。</td>
                    <td><strong>转换训练模块：</strong> 力量房训练从大重量低次数 (1-3RM) 转向 <strong>VBT 测速弹阻训练</strong>。要求负重降低至 40-60% 1RM，但向心动作速度必须 > 0.8m/s，提升起航前两桨的爆发力。</td>
                </tr>
                <tr>
                    <td><span class="badge red">FMS 核心项 < 2分</span><br>(TSPU 极弱)</td>
                    <td>躯干抗伸展能力差，骨盆中立位无法维持。</td>
                    <td><strong>暂停水上大阻力划：</strong> 交由体能教练，从 4x4 矩阵的 1x2 (死虫式/仰卧抗阻) 开始重新激活深层核心。避免在船上因代偿导致腰椎间盘损伤。</td>
                </tr>
            </table>
        </div>
    </div>

    <div style="margin-top: 50px; border-top: 2px dashed var(--border-color); padding-top: 20px; display: flex; justify-content: space-between; font-size: 15px;">
        <div><strong>医疗主管审核：</strong> __________________</div>
        <div><strong>科研总控审核：</strong> __________________</div>
        <div><strong>主教练签发：</strong> __________________</div>
    </div>
</div>`,
    category: '水上竞技',
  },
  {
    title: '水上竞技项目：运动评估与筛查标准操作流程（SOP）',
    content: `<div class="container">
    <h1>🛶 水上竞技项目：运动评估与筛查标准操作流程（SOP）</h1>
    
    <div class="meta-info">
        <p><strong>👥 适用对象：</strong> 皮划艇、赛艇、龙舟等水上项目运动员</p>
        <p><strong>👨‍⚕️ 执行人员：</strong> 队医/理疗师（负责分流与SFMA）、体能教练/康复师（负责FMS、YBT与体能测试）</p>
    </div>

    <h2 class="phase-title">🛑 第一阶段：入口症状分流 (Triage Flowchart)</h2>
    <div class="instruction-box">
        <strong>【操作说明】</strong> 在任何测试开始前，必须对运动员进行口头询问与症状分流。
    </div>
    <div class="flowchart-container">
[入口问询]：运动员目前是否有肌肉骨骼疼痛或已知未愈伤病？
      │
      ├─► 【是 (红灯)】 ──► 停止常规测试，直接转介队医进行【第五阶段：SFMA临床评估】
      │
      └─► 【否 (绿灯)】 ──► 获准进入常规筛查，执行【第二阶段：FMS基础筛查】
    </div>

    <h2 class="phase-title">🟢 第二阶段：功能动作筛查 (FMS)</h2>
    <div class="instruction-box">
        <strong>【操作说明】</strong> 针对无痛运动员进行7项基础动作模式与3项排除性测试。水上项目需重点关注 <strong>ASLR（主动直腿抬高）</strong>、<strong>TSPU（躯干稳定性）</strong> 和旋转稳定性。
    </div>
    
    <h3>【FMS 标准评分规则表】</h3>
    <table>
        <tr>
            <th width="10%">得分</th>
            <th width="40%">评分标准说明</th>
            <th width="50%">临床与训练建议</th>
        </tr>
        <tr>
            <td class="text-center"><strong>3分</strong></td>
            <td>能够完美、无代偿地完成标准动作</td>
            <td>动作达标，可安全进入负重与高阶体能训练</td>
        </tr>
        <tr>
            <td class="text-center"><strong>2分</strong></td>
            <td>能完成动作，但必须利用不良力学机制或代偿</td>
            <td>需进行纠正性训练，消除代偿前谨慎负重</td>
        </tr>
        <tr>
            <td class="text-center"><span class="badge red">1分</span></td>
            <td>即使使用代偿机制也无法完成动作</td>
            <td><strong>高危！</strong>绝对禁止在该模式下负重，最高优先纠正</td>
        </tr>
        <tr>
            <td class="text-center"><span class="badge red">0分</span></td>
            <td>在测试中（含排除测试）出现任何疼痛</td>
            <td>立即停止测试，转入SFMA临床诊断</td>
        </tr>
    </table>

    <h3>【FMS 现场测试记录表】</h3>
    <div class="instruction-box">注：双侧测试项目取最低分作为该项最终得分，若排除测试阳性（痛）则对应项直接记0分。</div>
    <table>
        <tr>
            <th width="30%">测试项目</th>
            <th width="15%">左侧得分 (0-3)</th>
            <th width="15%">右侧得分 (0-3)</th>
            <th width="15%">最终得分</th>
            <th width="25%">排除性测试 (痛=0分)</th>
        </tr>
        <tr>
            <td>1. 深蹲 (Deep Squat)</td>
            <td class="text-center">--</td>
            <td class="text-center">--</td>
            <td></td>
            <td>无</td>
        </tr>
        <tr>
            <td>2. 跨栏架步 (Hurdle Step)</td>
            <td></td>
            <td></td>
            <td></td>
            <td>无</td>
        </tr>
        <tr>
            <td>3. 直线弓箭步 (In-Line Lunge)</td>
            <td></td>
            <td></td>
            <td></td>
            <td>无</td>
        </tr>
        <tr>
            <td>4. 肩关节灵活性 (Shoulder Mob.)</td>
            <td></td>
            <td></td>
            <td></td>
            <td>撞击测试：阳性[ ] 阴性[ ]</td>
        </tr>
        <tr>
            <td>5. 主动直腿抬高 (ASLR)</td>
            <td></td>
            <td></td>
            <td></td>
            <td>无</td>
        </tr>
        <tr>
            <td>6. 躯干稳定性俯卧撑 (TSPU)</td>
            <td class="text-center">--</td>
            <td class="text-center">--</td>
            <td></td>
            <td>脊柱伸展：阳性[ ] 阴性[ ]</td>
        </tr>
        <tr>
            <td>7. 旋转稳定性 (Rotary Stab.)</td>
            <td></td>
            <td></td>
            <td></td>
            <td>脊柱屈曲：阳性[ ] 阴性[ ]</td>
        </tr>
        <tr>
            <td colspan="3" style="text-align: right;"><strong>总分 (Max: 21)</strong></td>
            <td colspan="2" style="font-size: 18px; font-weight: bold; color: var(--primary);">/21</td>
        </tr>
        <tr>
            <td colspan="5" class="text-center" style="background: #fffbeb; color: #b45309;">
                （水上项目需重点确保 <strong>ASLR, TSPU ≥ 2分</strong>）
            </td>
        </tr>
    </table>

    <h2 class="phase-title">⚖️ 第三阶段：高阶动态平衡测试 (YBT)</h2>
    <div class="instruction-box">
        <strong>【操作说明】</strong> 当FMS无0分且总分达标后，进行极限稳定性测试。水上项目对上下肢协同要求极高，需同时进行上肢(UQ)和下肢(LQ)测试。
    </div>
    
    <div class="formula-box">
        <strong>【YBT 标准计算公式】</strong><br>
        • 绝对到达距离 (cm) = (测试1 + 测试2 + 测试3) / 3<br>
        • 相对到达距离 (%) = (绝对到达距离 / 肢体长度) × 100<br>
        • 综合得分 (Composite %) = [(前方+内后+外后) / (3 × 肢体长度)] × 100
    </div>

    <h3>【YBT 上/下肢测试数据录入表】</h3>
    <table>
        <tr>
            <th colspan="5">下肢 YBT-LQ (肢长测量: ASIS至内踝)</th>
        </tr>
        <tr>
            <td></td>
            <td class="text-center"><strong>左腿支撑 (cm)</strong></td>
            <td class="text-center"><strong>右腿支撑 (cm)</strong></td>
            <td class="text-center"><strong>左右差值 (cm)</strong></td>
            <td class="text-center"><strong>风险预警阈值</strong></td>
        </tr>
        <tr>
            <td>肢体长度 (Limb Length)</td>
            <td></td>
            <td></td>
            <td class="text-center">--</td>
            <td class="text-center">--</td>
        </tr>
        <tr>
            <td>Anterior (前方伸展)</td>
            <td></td>
            <td></td>
            <td></td>
            <td>≥ 4 cm 风险成倍增加</td>
        </tr>
        <tr>
            <td>Posteromedial (内后方)</td>
            <td></td>
            <td></td>
            <td></td>
            <td>重点关注</td>
        </tr>
        <tr>
            <td>Posterolateral (外后方)</td>
            <td></td>
            <td></td>
            <td></td>
            <td>重点关注</td>
        </tr>
        <tr>
            <td><strong>综合得分 (Composite %)</strong></td>
            <td class="text-center">%</td>
            <td class="text-center">%</td>
            <td class="text-center">--</td>
            <td class="text-center">--</td>
        </tr>
    </table>

    <table>
        <tr>
            <th colspan="5">上肢 YBT-UQ (肢长: C7棘突至中指尖)</th>
        </tr>
        <tr>
            <td></td>
            <td class="text-center"><strong>左臂支撑 (cm)</strong></td>
            <td class="text-center"><strong>右臂支撑 (cm)</strong></td>
            <td class="text-center"><strong>左右差值 (cm)</strong></td>
            <td class="text-center"><strong>专项意义</strong></td>
        </tr>
        <tr>
            <td>肢体长度 (Limb Length)</td>
            <td></td>
            <td></td>
            <td class="text-center">--</td>
            <td class="text-center">--</td>
        </tr>
        <tr>
            <td>Medial (内侧推远)</td>
            <td></td>
            <td></td>
            <td></td>
            <td>评估划水侧与支撑侧</td>
        </tr>
        <tr>
            <td>Inferolateral (下外侧)</td>
            <td></td>
            <td></td>
            <td></td>
            <td>肩带与核心协同发力</td>
        </tr>
        <tr>
            <td>Superolateral (上外侧)</td>
            <td></td>
            <td></td>
            <td></td>
            <td>躯干抗旋转与稳定</td>
        </tr>
        <tr>
            <td><strong>综合得分 (Composite %)</strong></td>
            <td class="text-center">%</td>
            <td class="text-center">%</td>
            <td class="text-center">--</td>
            <td class="text-center">--</td>
        </tr>
    </table>

    <h2 class="phase-title">⏱️ 第四阶段：专项运动表现测试</h2>
    <div class="instruction-box">
        <strong>【操作说明】</strong> 用于评估通过FMS和YBT（绿灯）的健康运动员的力量与专项耐力。
    </div>
    <table>
        <tr>
            <th>测试类别</th>
            <th>测试项目</th>
            <th>测试数据</th>
            <th>划船专项意义</th>
        </tr>
        <tr>
            <td rowspan="2" class="text-center"><strong>上肢拉力/推力</strong></td>
            <td>最大引体向上 (Pull-ups)</td>
            <td class="text-center">____ 次</td>
            <td>背阔肌/肱二头肌划水力量</td>
        </tr>
        <tr>
            <td>最大俯卧撑 (Push-ups)</td>
            <td class="text-center">____ 次</td>
            <td>前侧链对抗拉力肌群失衡</td>
        </tr>
        <tr>
            <td class="text-center"><strong>末端力量</strong></td>
            <td>握力测试 (Handgrip)</td>
            <td class="text-center">____ KG</td>
            <td>桨面控制核心指标</td>
        </tr>
        <tr>
            <td class="text-center"><strong>专项爆发/耐力</strong></td>
            <td>200m / 500m 测功仪 (Ergometer)</td>
            <td class="text-center">____ 秒</td>
            <td>水上竞速专项无氧/有氧功率</td>
        </tr>
    </table>

    <h2 class="phase-title">⚕️ 第五阶段：选择性功能动作评估 (SFMA) - 针对疼痛/受限者</h2>
    <div class="instruction-box">
        <strong>【操作说明】</strong> 当患者有疼痛（第一阶段）或在FMS中得0分时，由持证医疗人员执行。
    </div>
    
    <h3>【SFMA 交通信号灯决策模型】</h3>
    <table>
        <tr>
            <th width="15%">诊断分类</th>
            <th width="25%">含义</th>
            <th width="15%">信号灯</th>
            <th width="45%">下一步操作指令</th>
        </tr>
        <tr>
            <td class="text-center"><strong>FN</strong></td>
            <td>功能良好且无痛</td>
            <td class="text-center"><span class="badge red">🛑 红灯</span></td>
            <td>停止该模式突破。无需干预，问题不在这里。</td>
        </tr>
        <tr>
            <td class="text-center"><strong>FP</strong></td>
            <td>功能良好但有痛</td>
            <td class="text-center"><span class="badge yellow">⚠️ 黄灯</span></td>
            <td>谨慎突破。记录为疼痛刺激标记，优先处理疼痛。</td>
        </tr>
        <tr>
            <td class="text-center"><strong>DP</strong></td>
            <td>功能障碍且有痛</td>
            <td class="text-center"><span class="badge yellow">⚠️ 黄灯</span></td>
            <td>谨慎突破。动作受限且痛，医疗干预（消炎止痛）优先。</td>
        </tr>
        <tr>
            <td class="text-center"><strong>DN</strong></td>
            <td>功能障碍且无痛</td>
            <td class="text-center"><span class="badge green">🟢 绿灯</span></td>
            <td><strong>强制一路突破到底。</strong>这是寻找远处力学病因的核心，必须通过分解测试剥离代偿，找病灶。</td>
        </tr>
    </table>

    <h3>【SFMA 顶级评估 (Top-Tier) 记录表】</h3>
    <div class="instruction-box">对以下10项动作进行打分勾选（FN / FP / DP / DN）：</div>
    <div style="column-count: 2; column-gap: 40px; font-size: 14px; margin-bottom: 20px;">
        <p><strong>颈部屈曲 (Cervical Flexion)</strong><br> [ ]FN  [ ]FP  [ ]DP  [ ]DN</p>
        <p><strong>颈部伸展 (Cervical Extension)</strong><br> [ ]FN  [ ]FP  [ ]DP  [ ]DN</p>
        <p><strong>颈部旋转 (Cervical Rotation)</strong><br> L: [ ]FN [ ]FP [ ]DP [ ]DN<br> R: [ ]FN [ ]FP [ ]DP [ ]DN</p>
        <p><strong>上肢模式1 (内旋/伸展 MRE)</strong><br> L: [ ]FN [ ]FP [ ]DP [ ]DN<br> R: [ ]FN [ ]FP [ ]DP [ ]DN</p>
        <p><strong>上肢模式2 (外旋/屈曲 LRF)</strong><br> L: [ ]FN [ ]FP [ ]DP [ ]DN<br> R: [ ]FN [ ]FP [ ]DP [ ]DN</p>
        <p><strong>多部位屈曲 (MSF - 体前屈)</strong><br> [ ]FN  [ ]FP  [ ]DP  [ ]DN</p>
        <p><strong>多部位伸展 (MSE - 体后伸)</strong><br> [ ]FN  [ ]FP  [ ]DP  [ ]DN</p>
        <p><strong>多部位旋转 (MSR - 躯干旋转)</strong><br> L: [ ]FN [ ]FP [ ]DP [ ]DN<br> R: [ ]FN [ ]FP [ ]DP [ ]DN</p>
        <p><strong>单腿站立 (Single Leg Stance)</strong><br> L: [ ]FN [ ]FP [ ]DP [ ]DN<br> R: [ ]FN [ ]FP [ ]DP [ ]DN</p>
        <p><strong>高举深蹲 (Overhead Squat)</strong><br> [ ]FN  [ ]FP  [ ]DP  [ ]DN</p>
    </div>

    <h3>【DN 模式标准分解流程图 (Breakout Logic)】</h3>
    <div class="flowchart-container">
对于打勾为 DN（绿灯） 的项目，严格遵循以下逻辑进行降维排查：

[顶级测试 DN] ──► 改变条件1：去除负重 (例如从站立改为仰卧/俯卧)
                     │
                     ├─► 动作变正常(FN) ──► 诊断为：稳定性/动作控制障碍 (SMCD) ──► 处方：4x4重载训练
                     │
                     └─► 动作仍受限(DN) ──► 改变条件2：由医生被动移动肢体 (被动测试)
                                           │
                                           ├─► 被动正常(FN) ──► 诊断为：主动的动作控制障碍 (SMCD)
                                           │
                                           └─► 被动仍受限(DN) ──► 诊断为：真实的灵活性问题
                                                                 (关节JMD 或 软组织TED) ──► 处方：手法松解
    </div>

    <h2 class="phase-title">🛠️ 第六阶段：纠正性运动处方制定 (3R & 4x4 Matrix)</h2>
    <div class="instruction-box">
        <strong>【操作说明】</strong> 基于SFMA和FMS的排查结果，遵循“灵活性优先于稳定性”的原则开具干预处方。
        <ul style="margin-top: 5px; margin-bottom: 0;">
            <li><strong>步骤 1：重置 (Reset)</strong> - 针对JMD/TED灵活性问题，队医使用手法、筋膜放松、关节松动术。</li>
            <li><strong>步骤 2：强化 (Reinforce)</strong> - 使用肌内效贴布、支具或体姿教育保护新获得的活动度。</li>
            <li><strong>步骤 3：重训 (Retrain)</strong> - 针对SMCD（稳定性障碍），通过 4x4 训练矩阵 重新编程神经肌肉控制。</li>
        </ul>
    </div>

    <h3>【4x4 纠正性训练矩阵 (4x4 Matrix)】</h3>
    <div class="instruction-box" style="background-color: #fef2f2; border-color: #fca5a5; color: #991b1b;">
        <strong>要求：</strong>从低姿势、低阻力开始（如1x1），确保完美控制后，方可向高姿势、高阻力进阶（向右、向下进阶）。
    </div>
    <table>
        <tr>
            <th width="20%">姿势难度 \\ 阻力类型</th>
            <th width="20%">1. 无阻力且有辅助 (PA)</th>
            <th width="20%">2. 无阻力 (自重)</th>
            <th width="20%">3. 有阻力且有辅助 (PA)</th>
            <th width="20%">4. 有阻力</th>
        </tr>
        <tr>
            <td style="background:#f8fafc; font-weight:bold;">1. 无负重 (仰卧/俯卧)</td>
            <td>1x1: 辅助下翻滚</td>
            <td>1x2: 主动翻滚、死虫式</td>
            <td>1x3: 辅助下抗阻卷起</td>
            <td>1x4: 独立抗阻卷起</td>
        </tr>
        <tr>
            <td style="background:#f8fafc; font-weight:bold;">2. 四足位 (抗重力)</td>
            <td>2x1: 辅助四足位对角伸展</td>
            <td>2x2: 鸟狗式 (Bird-Dog)</td>
            <td>2x3: 辅助弹力带抗阻鸟狗</td>
            <td>2x4: 弹力带抗阻鸟狗</td>
        </tr>
        <tr>
            <td style="background:#f8fafc; font-weight:bold;">3. 跪姿 (单边不对称)</td>
            <td>3x1: 辅助半跪姿控制</td>
            <td>3x2: 半跪姿躯干转动</td>
            <td>3x3: 辅助半跪砍树动作</td>
            <td>3x4: 半跪姿抗阻砍树</td>
        </tr>
        <tr>
            <td style="background:#f8fafc; font-weight:bold;">4. 站姿 (极限动态)</td>
            <td>4x1: 辅助单腿触脚尖</td>
            <td>4x2: 自重箭步蹲、单腿硬拉</td>
            <td>4x3: 辅助站姿抗阻转体</td>
            <td>4x4: 站姿负重抗阻爆发</td>
        </tr>
    </table>

    <div class="formula-box" style="border-style: solid; background: #f0fdf4; border-color: var(--green); color: #166534;">
        <strong>【处方签发标准示例】</strong><br><br>
        • 水上项目运动员如果由于腘绳肌短缩导致 ASLR 得1分：执行 Reset（泡沫轴放松/拉伸）。<br>
        • 若 ASLR 受限是由于核心无法稳定骨盆（仰卧被动可抬高但主动不行）：跳过Reset，直接进入 4x4 Matrix，从 1x1（无负重辅助核心激活）开始重训。
    </div>

</div>`,
    category: '水上竞技',
  },
];